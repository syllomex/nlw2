import { Request, Response } from "express";
import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface IScheduleItem {
  weekday: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;

    const weekday = filters.weekday as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if (!weekday || !subject || !time) {
      return res
        .status(400)
        .json({ error: "Missing filters to search for classes" });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedules.*")
          .from("class_schedules")
          .whereRaw("`class_schedules`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedules`.`weekday` = ??", [Number(weekday)])
          .whereRaw(
            "`class_schedules`.`from` <= ?? AND `class_schedules`.`to` > ??",
            [timeInMinutes, timeInMinutes]
          );
      })
      .where("classes.subject", "=", subject)
      .innerJoin(
        "class_schedules",
        "classes.id",
        "=",
        "class_schedules.class_id"
      )
      .innerJoin("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*", "class_schedules.*"]);

    return res.json(classes);
  }

  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const transaction = await db.transaction();

    try {
      const insertedUsersIds = await transaction("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await transaction("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((item: IScheduleItem) => {
        return {
          class_id,
          weekday: item.weekday,
          from: convertHourToMinutes(item.from),
          to: convertHourToMinutes(item.to),
        };
      });

      await transaction("class_schedules").insert(classSchedule);

      await transaction.commit();

      return res.status(201).json({ message: "created" });
    } catch (err) {
      await transaction.rollback();
      console.log(err);

      return res
        .status(400)
        .json({ error: "Unexpected error while creating new class." });
    }
  }
}

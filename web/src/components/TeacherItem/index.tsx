import React, { useState, useEffect } from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

interface ITeacherProps {
  id: number;
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
  schedules: Array<{
    weekday: number;
    from: number;
    to: number;
  }>;
}

interface IFormatedSchedule {
  weekday: string;
  from: string;
  to: string;
}

const TeacherItem: React.FC<ITeacherProps> = ({
  id,
  name,
  avatar,
  subject,
  bio,
  cost,
  whatsapp,
  schedules,
}) => {
  function createNewConnection() {
    api.post("/connection", { user_id: id });
  }

  const [formatedSchedules, setFormatedSchedules] = useState<
    IFormatedSchedule[]
  >();

  function getWeekdayTimesAndAdd(
    weekday: number,
    converted_weekday: string,
    schedulesArray: IFormatedSchedule[]
  ) {
    let exists = false;
    schedules.forEach((schedule) => {
      if (schedule.weekday === weekday) {
        let from = "";
        let to = "";
        from =
          Math.floor(schedule.from / 60).toString() +
          ":" +
          ((schedule.from % 60) * 60).toString().padEnd(2, "0");

        to =
          Math.floor(schedule.to / 60).toString() +
          ":" +
          ((schedule.to % 60) * 60).toString().padEnd(2, "0");
        schedulesArray.push({ weekday: converted_weekday, from, to });
        exists = true;
      }
    });

    if (!exists)
      schedulesArray.push({ weekday: converted_weekday, from: "", to: "" });

    return schedulesArray;
  }

  useEffect(() => {
    let schedulesArray: IFormatedSchedule[] = [];

    schedulesArray = getWeekdayTimesAndAdd(2, "Segunda", schedulesArray);
    schedulesArray = getWeekdayTimesAndAdd(3, "Terça", schedulesArray);
    schedulesArray = getWeekdayTimesAndAdd(4, "Quarta", schedulesArray);
    schedulesArray = getWeekdayTimesAndAdd(5, "Quinta", schedulesArray);
    schedulesArray = getWeekdayTimesAndAdd(6, "Sexta", schedulesArray);

    setFormatedSchedules(schedulesArray);
  }, []); //eslint-disable-line

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="Avatar" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <div className="schedules-header">
        <p>Dia</p>
        <p>Horário</p>
      </div>
      <div className="schedules">
        {formatedSchedules?.map((schedule, index) => {
          return (
            <div
              key={index}
              className={`schedule ${
                schedule.from === "" && schedule.to === "" && "disabled"
              }`}
            >
              <div>
                <p className="info-name">Dia</p>
                <p className="info-data">{schedule.weekday}</p>
              </div>
              <div>
                <p className="info-name">Horário</p>
                <p className="info-data">
                  {schedule.from} - {schedule.to}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost.toFixed(2)}</strong>
        </p>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;

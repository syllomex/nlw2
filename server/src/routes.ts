import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
const router = express.Router();

const classesController = new ClassesController();
const connectionsControllers = new ConnectionsController();

router.post("/class", classesController.create);
router.get("/classes", classesController.index);

router.post("/connection", connectionsControllers.create);
router.get("/connections", connectionsControllers.index);

export default router;

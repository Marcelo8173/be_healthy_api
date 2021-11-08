import { Router } from "express";
import { DailyController } from "../controller/daily.controller";

const dailyController = new DailyController();
const dailyRouter = Router();

dailyRouter.post("/", dailyController.create);
// userRouter.get('/', userController.list);

export { dailyRouter };

import { Router } from "express";
import { userRouter } from "../modules/user/routes/user.routes";
import { dailyRouter } from "../modules/daily/routes/daily.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/daily", dailyRouter);

export { routes };

import { Router } from "express";
import { userRouter } from '../modules/user/routes/user.routes'

const routes = Router();

routes.use('/users', userRouter);

export { routes };
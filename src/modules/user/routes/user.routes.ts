import { Router } from "express";
import { UserController } from '../controller/user.controller';


const userController = new UserController();
const userRouter = Router();

userRouter.post('/', userController.create);

export { userRouter };
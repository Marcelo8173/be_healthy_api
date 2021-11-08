import { request, response, Router } from "express";
// import { UserController } from '../controller/user.controller';


// const userController = new UserController();
const dailyRouter = Router();

dailyRouter.post('/', (request, response) => {
    console.log('aqui')
});
// userRouter.get('/', userController.list);

export { dailyRouter };
import { Router } from "express";

const userRouter = Router();

userRouter.post('/', (request,response) => {
    const {name,email} = request.body;
    console.log(name, email);
})

export { userRouter };
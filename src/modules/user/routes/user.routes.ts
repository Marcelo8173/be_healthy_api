import { Router } from "express";
import { getRepository } from 'typeorm';
import { UserModel } from '../model/user.model';
import { v4 as uuid} from 'uuid';


const userRouter = Router();

userRouter.post('/', async (request,response) => {
    const {name,email, password} = request.body;
    // salvar um novo usuario
    const repository = getRepository(UserModel);

    const users = repository.create({
        id: uuid(), 
        name,
        email, 
        password
    })
    const userSaved = await repository.save(users);

    return response.status(201).json(userSaved);
})

export { userRouter };
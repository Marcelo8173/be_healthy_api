import { Request, Response } from "express";
import { UserModel } from '../model/user.model';
import { CreateNewUserService } from '../services/createNewUserService';

class UserController {

    async create(request: Request, response: Response): Promise<Response<UserModel>> {
        const {name,email, password} = request.body;
        const createUserService = new CreateNewUserService();
        const userSaved = await createUserService.execute({name,email, password})

        return response.status(201).json(userSaved);
    }
}

export { UserController };
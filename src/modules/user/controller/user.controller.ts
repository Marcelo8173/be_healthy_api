import { Request, Response } from "express";
import { UserModel } from '../model/user.model';
import { UserControllerProtocols } from "../protocolls/userControllerProtocols";
import { CreateNewUserService } from '../services/createNewUserService';
import { ListUserService } from "../services/ListUserService";

class UserController implements UserControllerProtocols {

    async create(request: Request, response: Response): Promise<Response<UserModel>> {
        const {name,email, password} = request.body;
        const createUserService = new CreateNewUserService();
        const userSaved = await createUserService.execute({name,email, password})

        return response.status(201).json(userSaved);
    }

    async list(request: Request, response: Response): Promise<Response<UserModel[]>>{
        const listUserService = new ListUserService();
        const listUsers = await listUserService.execute();
        return response.status(200).json(listUsers);
    }
}

export { UserController };
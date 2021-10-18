import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { UserModel } from '../model/user.model';
import { v4 as uuid} from 'uuid';

class UserController {

    async create(request: Request, response: Response): Promise<Response> {
        const {name,email, password} = request.body;
        const repository = getRepository(UserModel);
    
        const users = repository.create({
            id: uuid(), 
            name,
            email, 
            password
        })
        const userSaved = await repository.save(users);
    
        return response.status(201).json(userSaved);
    }

}

export { UserController };
import { getRepository } from "typeorm";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../userDTO/user.DTO";
import { CreateNewUserResponse } from "./responseProtocols/createNewUserResponse";


class CreateNewUserService {
    async execute(data: UserDTO): Promise<CreateNewUserResponse>{
        const repository = getRepository(UserModel);
        
        const emailExist = await repository.find({
            where: {
                email: data.email
            }
        });

        if(emailExist){
            return {
                status: 404,
                msg: 'email already exist'
            }
        }

        const users: UserDTO = repository.create(data);
        const userSaved = await repository.save(users);
        
        delete userSaved.password;

        return {
            msg: 'user created',
            status: 201, 
            data: userSaved,
        };
    }
}

export { CreateNewUserService };
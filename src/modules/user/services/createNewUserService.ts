import { getRepository } from "typeorm";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../userDTO/user.DTO";
import { CreateNewUserResponse } from "./responseProtocols/createNewUserResponse";
import { BCryptHashProvider } from '../../providers/BcrypImplementation'


class CreateNewUserService {
    async execute(data: UserDTO): Promise<CreateNewUserResponse>{
        const bCryptHashProvider = new BCryptHashProvider();
        const repository = getRepository(UserModel);
        
        const emailExist = await repository.findOne({
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

        const users: UserDTO = repository.create({
            email: data.email,
            password: await bCryptHashProvider.generateHash(data.password),
            name: data.name,
        });
        const userSaved = await repository.save(users);

        return {
            msg: 'user created',
            status: 201, 
            data: userSaved,
        };
    }
}

export { CreateNewUserService };
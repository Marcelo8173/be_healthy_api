import { getRepository } from "typeorm";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../userDTO/user.DTO";

class CreateNewUserService {
    async execute(data: UserDTO): Promise<UserModel>{
        const repository = getRepository(UserModel);
    
        const users: UserDTO = repository.create(data);
        const userSaved = await repository.save(users);
        
        delete userSaved.password;

        return userSaved;
    }
}

export { CreateNewUserService };
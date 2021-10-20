import { getRepository } from "typeorm";
import { UserModel } from "../model/user.model";
import { UserRepository } from '../repository/user.repository';

class ListUserService {
    private userRespository;

    constructor(){
        this.userRespository = new UserRepository;
    }

    async execute(): Promise<UserModel[]>{
        const listUsers = this.userRespository.listAllUser();

        return listUsers
    }
}

export { ListUserService };
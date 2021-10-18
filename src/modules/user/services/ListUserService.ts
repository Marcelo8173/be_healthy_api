import { getRepository } from "typeorm";
import { UserModel } from "../model/user.model";

class ListUserService {
    async execute(): Promise<UserModel[]>{
        const repository = getRepository(UserModel);

        const listUsers = await repository.query(`
            SELECT * FROM users
        `);

        return listUsers
    }
}

export { ListUserService };
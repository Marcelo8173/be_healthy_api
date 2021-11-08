import { getRepository, Repository } from "typeorm";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../userDTO/user.DTO";
import { BCryptHashProvider } from "../../providers/BcrypImplementation";

class UserRepository {
  private userRepository: Repository<UserModel>;
  private bCryptHashProvider;

  constructor() {
    this.userRepository = getRepository(UserModel);
    this.bCryptHashProvider = new BCryptHashProvider();
  }

  async createNewUser(data: UserDTO): Promise<UserModel> {
    const users: UserDTO = this.userRepository.create({
      email: data.email,
      password: await this.bCryptHashProvider.generateHash(data.password),
      name: data.name,
    });
    const userSaved = await this.userRepository.save(users);

    return userSaved;
  }

  async findEmailExist(email: string): Promise<Boolean> {
    const existEmail = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (existEmail) {
      return true;
    }
    return false;
  }

  async listAllUser(): Promise<UserModel[]> {
    const listUsers = await this.userRepository.query(`
            SELECT id, name, email FROM users
        `);
    return listUsers;
  }
}

export { UserRepository };

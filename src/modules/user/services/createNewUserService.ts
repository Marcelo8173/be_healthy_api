import { UserDTO } from "../userDTO/user.DTO";
import { CreateNewUserResponse } from "./responseProtocols/createNewUserResponse";
import { UserRepository } from "../repository/user.repository";

class CreateNewUserService {
  private userRespository;

  constructor() {
    this.userRespository = new UserRepository();
  }

  async execute(data: UserDTO): Promise<CreateNewUserResponse> {
    const emailExist = await this.userRespository.findEmailExist(data.email);

    if (emailExist) {
      return {
        status: 404,
        msg: "email already exist",
      };
    }

    const userSaved = await this.userRespository.createNewUser(data);

    return {
      msg: "user created",
      status: 201,
      data: userSaved,
    };
  }
}

export { CreateNewUserService };

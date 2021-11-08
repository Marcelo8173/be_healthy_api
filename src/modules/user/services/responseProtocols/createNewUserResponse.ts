import { UserModel } from "../../model/user.model";

export interface CreateNewUserResponse {
  status: number;
  msg: string;
  data?: UserModel;
}

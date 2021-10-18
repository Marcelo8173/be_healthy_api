import { UserModel } from "../model/user.model";
import { Request, Response } from "express";

export interface UserControllerProtocols{
    create(request: Request, response: Response): Promise<Response<UserModel>>;
    list(request: Request, response: Response): Promise<Response<UserModel[]>>;
}
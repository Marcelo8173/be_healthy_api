import { DailyModel } from "../model/daily.model";
import { Request, Response } from "express";
import { CreateNewDailyResponse } from "../services/responseProtocols/daily.response";

export interface DailyControllerProtocols {
  create(request: Request, response: Response): Promise<Response<DailyModel>> ;
  list(request: Request, response: Response): Promise<DailyModel[]>;
}

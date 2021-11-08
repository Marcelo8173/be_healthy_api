import { IDailyDTO } from "../dailyDTO/daily.DTO";
import { DailyModel } from "../model/daily.model";
import { DailyControllerProtocols } from "../protocolls/dailyController.protocols";
import { Request, Response } from "express";
import { CreateNewDailyService } from "../services/createDaily.service";

class DailyController implements DailyControllerProtocols {
  async create(
    request: Request,
    response: Response
  ): Promise<Response<DailyModel>> {
    const { description, day, type, user_id }: IDailyDTO = request.body;

    const createNewDailyService = new CreateNewDailyService();
    const dailySaved = await createNewDailyService.execute({
      description,
      day,
      type,
      user_id,
    });

    return response
      .status(dailySaved.status)
      .json({ msg: dailySaved.msg, data: dailySaved.data });
  }
  list(request: Request, response: Response): Promise<DailyModel[]> {
    throw new Error("Method not implemented.");
  }
}

export { DailyController };

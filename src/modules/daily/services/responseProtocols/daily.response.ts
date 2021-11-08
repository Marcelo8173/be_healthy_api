import { DailyModel } from "../../model/daily.model";

export interface CreateNewDailyResponse {
  status: number;
  msg: string;
  data?: DailyModel;
}

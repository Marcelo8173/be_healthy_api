import { getRepository, Repository } from "typeorm";
import { IDailyDTO } from "../dailyDTO/daily.DTO";
import { DailyModel } from "../model/daily.model";

class DailyRespository {
  private userRepository: Repository<DailyModel>;

  constructor() {
    this.userRepository = getRepository(DailyModel);
  }

  async createNewDaily(data: IDailyDTO): Promise<DailyModel> {
    const newDaily: IDailyDTO = this.userRepository.create({
      description: data.description,
      day: data.day,
      user_id: data.user_id,
      type: data.type,
    });
    
    const dailySaved = await this.userRepository.save(newDaily);

    return dailySaved;
  }
}

export { DailyRespository };

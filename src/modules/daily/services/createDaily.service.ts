import { IDailyDTO } from "../dailyDTO/daily.DTO";
import { DailyRespository } from "../repository/daily.repository";
import { CreateNewDailyResponse } from '../services/responseProtocols/daily.response';

class CreateNewDailyService {

    private dailyRepository;

    constructor(){
        this.dailyRepository = new DailyRespository;
    }

    async execute(data: IDailyDTO): Promise<CreateNewDailyResponse>{
        const dataSaved = await this.dailyRepository.createNewDaily(data);

        return {
            msg: 'daily creted',
            status: 200,
            data: dataSaved
        }
    }
}

export { CreateNewDailyService };
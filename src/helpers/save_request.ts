import { Record } from '../models/record';
import { RecordRepository } from '../repositories/record/record.repository';
import { RecordService } from '../services/record/record.service';

export class SaveRequest {
    private recordService:RecordService;
    
    constructor(private userId:string) {
        this.recordService = new RecordService(new RecordRepository(Record));
        
    }
    saveData = async (body:any) => {
        const data = {
            user:this.userId,
            petition:body.petition,
            data:body.data
        };
        this.recordService.create(data);
    };
}
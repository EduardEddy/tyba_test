import { Response, Request } from 'express';
import { Record } from '../../models/record';
import { RecordRepository } from '../../repositories/record/record.repository';
import { RecordService } from '../../services/record/record.service';

export class RecordCtrl {
    private recordService:RecordService;
    constructor() {
        this.recordService = new RecordService(new RecordRepository(Record));
    }

    get = async (req:Request, res:Response) => {
        const records = await this.recordService.all();
        return res.status(200).json(records.data);
    };
}
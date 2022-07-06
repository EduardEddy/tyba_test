import BaseService from '../base.service';
import { RecordRepository } from '../../repositories/record/record.repository';

export class RecordService extends BaseService {
    constructor(private readonly RecordRepository: RecordRepository){
        super(RecordRepository);
    }
}
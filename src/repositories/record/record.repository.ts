import BaseRepository from '../base.repository';

export class RecordRepository extends BaseRepository {
    private _model:any;
    constructor(model:any){
        super(model);
        this._model = model;
    }

    getAll= async() => await this._model.find().populate('user');
}
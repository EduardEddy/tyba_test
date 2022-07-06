import BaseRepository from '../base.repository';

export class UserRepository extends BaseRepository {
    private _model:any;
    constructor(model:any){
        super(model);
        this._model = model;
    }
}
export default abstract class BaseRepository {
    constructor(private model:any){
        this.model = model;
    }

    all = async() => await this.model.find();
    create = async (entity:unknown) => await this.model.create(entity);
    
}
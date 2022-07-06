import { responses } from '../helpers/response_error';
import { ResponseInterface } from '../interfaces/response.interface';

export default abstract class BaseService {
    readonly _repository:any;
    constructor(repository:any){
        this._repository = repository;
    }

    create = async (entity:unknown):Promise<ResponseInterface> => {
        try {
            await this._repository.create(entity);
            return {
                status:201,
                message: 'success'
            };
        } catch (error) {
            return responses(error, `${this._repository.constructor.name} method create`);
        }
    };

    all = async ():Promise<ResponseInterface> => {
        try {
            console.log(`${this._repository.constructor.name} method create`);
            const data = await this._repository.getAll();
            return {
                status:200,
                message: 'success',
                data
            };
        } catch (error) {
            return responses(error, `${this._repository.constructor.name} method all`);
        }
    };
}
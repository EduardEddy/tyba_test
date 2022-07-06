import {Response, Request} from 'express';
import { GetInfoCity } from '../../helpers/get_info_city';
import { GetInfoCoordinates } from '../../helpers/get_info_coordinates';
import { SaveRequest } from '../../helpers/save_request';
import { UserInterface } from '../../interfaces/user.interface';

export class RestaurantCtrl {
    getInfo = async (req:Request, res:Response) => {
        const body = req.body;
        let getInfoRest;
        const user = req.user;
        const saveRequest = new SaveRequest(user.id);
        switch (body.type) {
            case 'ciudad':
                saveRequest.saveData({petition:'consulta por ciudad',data:body.city});
                getInfoRest = new GetInfoCity(body.city);
                break;
        
            case 'geo':
                saveRequest.saveData({petition:'consulta por coordenadas',data:`lat=${body.lat}&lon=${body.lon}`});
                getInfoRest = new GetInfoCoordinates(`lat=${body.lat}&lon=${body.lon}`);
                break;
        }
        const resp = await getInfoRest?.info();
        return res.status(200).json(resp);
    };
}
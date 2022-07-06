"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCtrl = void 0;
const get_info_city_1 = require("../../helpers/get_info_city");
const get_info_coordinates_1 = require("../../helpers/get_info_coordinates");
const save_request_1 = require("../../helpers/save_request");
class RestaurantCtrl {
    constructor() {
        this.getInfo = async (req, res) => {
            const body = req.body;
            let getInfoRest;
            const user = req.user;
            const saveRequest = new save_request_1.SaveRequest(user.id);
            switch (body.type) {
                case 'ciudad':
                    saveRequest.saveData({ petition: 'consulta por ciudad', data: body.city });
                    getInfoRest = new get_info_city_1.GetInfoCity(body.city);
                    break;
                case 'geo':
                    saveRequest.saveData({ petition: 'consulta por coordenadas', data: `lat=${body.lat}&lon=${body.lon}` });
                    getInfoRest = new get_info_coordinates_1.GetInfoCoordinates(`lat=${body.lat}&lon=${body.lon}`);
                    break;
            }
            const resp = await (getInfoRest === null || getInfoRest === void 0 ? void 0 : getInfoRest.info());
            return res.status(200).json(resp);
        };
    }
}
exports.RestaurantCtrl = RestaurantCtrl;
//# sourceMappingURL=restaurant.ctrl.js.map
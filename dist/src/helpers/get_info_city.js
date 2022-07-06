"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInfoCity = void 0;
const axios_1 = require("axios");
class GetInfoCity {
    //private cityString;
    constructor(city) {
        this.city = city;
        this.info = async () => {
            const url = `https://documenu.p.rapidapi.com/restaurants/state/${this.city}`;
            const header = {
                'x-api-key': '8df17ed143msh70041fb013d1122p1c9d02jsnfef36ec15eb3',
                'X-RapidAPI-Key': '11e514f600msh0ceaae45ec4618ap1422a6jsn7d68ea327041',
                'X-RapidAPI-Host': 'documenu.p.rapidapi.com'
            };
            console.log('aqui');
            const data = await this.axios.get(url, { headers: header });
            return data.data;
        };
        this.axios = new axios_1.Axios;
    }
}
exports.GetInfoCity = GetInfoCity;
//# sourceMappingURL=get_info_city.js.map
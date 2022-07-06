import { Axios } from 'axios';

export class GetInfoCoordinates {
    private axios:Axios;
    
    constructor(private geo:string) {
        this.axios = new Axios;
    }

    info = async () => {
        const url = `https://documenu.p.rapidapi.com/restaurants/search/geo?${ this.geo }`;
        const header = {
            'x-api-key': '8df17ed143msh70041fb013d1122p1c9d02jsnfef36ec15eb3',
            'X-RapidAPI-Key': '11e514f600msh0ceaae45ec4618ap1422a6jsn7d68ea327041',
            'X-RapidAPI-Host': 'documenu.p.rapidapi.com'
        };
        return await this.axios.get(url,{headers:header});
    };
}
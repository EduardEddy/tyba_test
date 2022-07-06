import express, { Application } from 'express';
import { ConnectionToDB } from './connection'; 
import cors from 'cors';

import * as route from '../src/routes/index'; 

class Server {
    private app: Application;
    port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        new ConnectionToDB;
        this.middleware();
        this.routes();
    }

    listen(): void {
        this.app.listen(this.port,() => {
            console.log(`Server run in port ${this.port}`);
        });
    }

    routes = (): void => {
        this.app.use('/api/users', route.userRoute);
        this.app.use('/api/login', route.authRoute);
        this.app.use('/api/records', route.recordRoute);
        this.app.use('/api/restaurant', route.restRoute);
    };

    middleware = ():void => {
        this.app.use(express.json());
        this.app.use(cors());
    };
}

export default Server;
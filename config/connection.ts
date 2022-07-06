import mongoose from 'mongoose';

export class ConnectionToDB {
    constructor() {
        this.db();
    }

    db = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/tybadb');
            console.log('conexion exitosa');
        } catch (error) {
            console.log('error');
            console.log(error);
        }
    };
}
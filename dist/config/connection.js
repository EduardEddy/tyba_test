"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class ConnectionToDB {
    constructor() {
        this.db = async () => {
            try {
                await mongoose_1.default.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/tybadb');
                console.log('conexion exitosa');
            }
            catch (error) {
                console.log('error');
                console.log(error);
            }
        };
        this.db();
    }
}
exports.ConnectionToDB = ConnectionToDB;
//# sourceMappingURL=connection.js.map
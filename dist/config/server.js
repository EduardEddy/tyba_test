"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./connection");
const cors_1 = __importDefault(require("cors"));
const route = __importStar(require("../src/routes/index"));
class Server {
    constructor() {
        this.routes = () => {
            this.app.use('/api/users', route.userRoute);
            this.app.use('/api/login', route.authRoute);
            this.app.use('/api/records', route.recordRoute);
            this.app.use('/api/restaurant', route.restRoute);
        };
        this.middleware = () => {
            this.app.use(express_1.default.json());
            this.app.use((0, cors_1.default)());
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        new connection_1.ConnectionToDB;
        this.middleware();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server run in port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map
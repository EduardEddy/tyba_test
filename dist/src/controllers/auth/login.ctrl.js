"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const login_service_1 = __importDefault(require("../../services/auth/login.service"));
const login_respository_1 = __importDefault(require("../../repositories/auth/login.respository"));
class LoginCtrl {
    constructor() {
        this.auth = async (req, res) => {
            const { body } = req;
            const user = await this._loginService.login(body.email, body.password);
            const data = user.data;
            return res.status(user.status).json(data !== null && data !== void 0 ? data : { message: user.message });
        };
        this._loginService = new login_service_1.default(new login_respository_1.default(user_1.User));
    }
}
exports.default = LoginCtrl;
//# sourceMappingURL=login.ctrl.js.map
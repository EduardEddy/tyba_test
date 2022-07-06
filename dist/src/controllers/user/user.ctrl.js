"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCtrl = void 0;
const user_1 = require("../../models/user");
const user_repository_1 = require("../../repositories/user/user.repository");
const user_service_1 = require("../../services/user/user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserCtrl {
    constructor() {
        this.create = async (req, res) => {
            const body = req.body;
            body.password = await bcrypt_1.default.hash(body.password, 10);
            const user = await this.userService.create(body);
            return res.status(user.status).json({ message: user.message });
        };
        this.userService = new user_service_1.UserService(new user_repository_1.UserRepository(user_1.User));
    }
}
exports.UserCtrl = UserCtrl;
//# sourceMappingURL=user.ctrl.js.map
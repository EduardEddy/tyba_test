"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = __importDefault(require("../base.repository"));
class LoginRepository extends base_repository_1.default {
    constructor(user) {
        super(user);
        this.login = async (email) => {
            return this._user.findOne({
                where: {
                    'email': email
                }
            });
        };
        this._user = user;
    }
}
exports.default = LoginRepository;
//# sourceMappingURL=login.respository.js.map
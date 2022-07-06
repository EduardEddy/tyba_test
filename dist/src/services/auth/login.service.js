"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = __importDefault(require("../base.service"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginService extends base_service_1.default {
    constructor(loginRepository) {
        super(loginRepository);
        this.login = async (email, password) => {
            try {
                const user = await this._loginRepository.login(email);
                if (user) {
                    const info = await bcrypt_1.default.compare(password, user.password);
                    if (info) {
                        const token = await jsonwebtoken_1.default.sign({
                            'id': user.id,
                            'name': user.name,
                            'lastname': user.lastname
                        }, process.env.PRIVATE_KEY || 'TRY-TO-TEST');
                        return {
                            status: 200,
                            data: { user, token }
                        };
                    }
                }
                return {
                    message: 'Invalid credentials',
                    status: 401
                };
            }
            catch (error) {
                console.log(`error: login services:  ${error}`);
                return { status: 500, message: 'Internal error' };
            }
        };
        this._loginRepository = loginRepository;
    }
}
exports.default = LoginService;
//# sourceMappingURL=login.service.js.map
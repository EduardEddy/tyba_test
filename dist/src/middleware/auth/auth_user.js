"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthUserMiddleware {
    constructor() {
        this.verifyAuth = (req, res, next) => {
            if (!req.headers.authorization) {
                return res.status(403).json({ message: 'token not provider' });
            }
            const token = req.headers.authorization.split(' ')[1];
            try {
                jsonwebtoken_1.default.verify(token, process.env.PRIVATE_KEY || 'TRY-TO-TEST');
                const user = jsonwebtoken_1.default.decode(token);
                req.user = user;
                next();
            }
            catch (error) {
                return res.status(403).json({ message: 'invalid_token' });
            }
        };
    }
}
exports.default = AuthUserMiddleware;
//# sourceMappingURL=auth_user.js.map
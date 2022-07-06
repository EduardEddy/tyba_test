"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const base_service_1 = __importDefault(require("../base.service"));
class UserService extends base_service_1.default {
    constructor(userRepository) {
        super(userRepository);
        this.userRepository = userRepository;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
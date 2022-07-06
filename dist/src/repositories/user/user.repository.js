"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const base_repository_1 = __importDefault(require("../base.repository"));
class UserRepository extends base_repository_1.default {
    constructor(model) {
        super(model);
        this._model = model;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map
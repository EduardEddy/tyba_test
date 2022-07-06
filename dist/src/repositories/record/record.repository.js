"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordRepository = void 0;
const base_repository_1 = __importDefault(require("../base.repository"));
class RecordRepository extends base_repository_1.default {
    constructor(model) {
        super(model);
        this.getAll = async () => await this._model.find().populate('user');
        this._model = model;
    }
}
exports.RecordRepository = RecordRepository;
//# sourceMappingURL=record.repository.js.map
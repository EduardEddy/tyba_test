"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordService = void 0;
const base_service_1 = __importDefault(require("../base.service"));
class RecordService extends base_service_1.default {
    constructor(RecordRepository) {
        super(RecordRepository);
        this.RecordRepository = RecordRepository;
    }
}
exports.RecordService = RecordService;
//# sourceMappingURL=record.service.js.map
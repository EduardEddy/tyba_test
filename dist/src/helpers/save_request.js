"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveRequest = void 0;
const record_1 = require("../models/record");
const record_repository_1 = require("../repositories/record/record.repository");
const record_service_1 = require("../services/record/record.service");
class SaveRequest {
    constructor(userId) {
        this.userId = userId;
        this.saveData = async (body) => {
            const data = {
                user: this.userId,
                petition: body.petition,
                data: body.data
            };
            this.recordService.create(data);
        };
        this.recordService = new record_service_1.RecordService(new record_repository_1.RecordRepository(record_1.Record));
    }
}
exports.SaveRequest = SaveRequest;
//# sourceMappingURL=save_request.js.map
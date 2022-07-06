"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordCtrl = void 0;
const record_1 = require("../../models/record");
const record_repository_1 = require("../../repositories/record/record.repository");
const record_service_1 = require("../../services/record/record.service");
class RecordCtrl {
    constructor() {
        this.get = async (req, res) => {
            const records = await this.recordService.all();
            return res.status(200).json(records.data);
        };
        this.recordService = new record_service_1.RecordService(new record_repository_1.RecordRepository(record_1.Record));
    }
}
exports.RecordCtrl = RecordCtrl;
//# sourceMappingURL=record.ctrl.js.map
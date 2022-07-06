"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const record_ctrl_1 = require("../../controllers/record/record.ctrl");
const router = (0, express_1.Router)();
const recordCtrl = new record_ctrl_1.RecordCtrl;
router.get('/', recordCtrl.get);
exports.default = router;
//# sourceMappingURL=record.route.js.map
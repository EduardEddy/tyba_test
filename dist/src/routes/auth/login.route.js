"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_ctrl_1 = __importDefault(require("../../controllers/auth/login.ctrl"));
const login_middleware_1 = require("../../middleware/validations/auth/login.middleware");
const router = (0, express_1.Router)();
const loginCtrl = new login_ctrl_1.default;
router.post('/', login_middleware_1.validateAuth, loginCtrl.auth);
exports.default = router;
//# sourceMappingURL=login.route.js.map
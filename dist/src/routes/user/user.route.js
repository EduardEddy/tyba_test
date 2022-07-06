"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_ctrl_1 = require("../../controllers/user/user.ctrl");
const create_middleware_1 = require("../../middleware/validations/user/create.middleware");
const router = (0, express_1.Router)();
const userCtrl = new user_ctrl_1.UserCtrl;
router.post('/', create_middleware_1.validateCreate, userCtrl.create);
exports.default = router;
//# sourceMappingURL=user.route.js.map
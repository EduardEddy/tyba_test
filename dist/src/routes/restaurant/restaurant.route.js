"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_ctrl_1 = require("../../controllers/restaurant/restaurant.ctrl");
const auth_user_1 = __importDefault(require("../../middleware/auth/auth_user"));
const router = (0, express_1.Router)();
const restCtrl = new restaurant_ctrl_1.RestaurantCtrl;
const authUser = new auth_user_1.default;
router.post('/', authUser.verifyAuth, restCtrl.getInfo);
exports.default = router;
//# sourceMappingURL=restaurant.route.js.map
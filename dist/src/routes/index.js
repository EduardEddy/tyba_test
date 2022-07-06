"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restRoute = exports.recordRoute = exports.authRoute = exports.userRoute = void 0;
const user_route_1 = __importDefault(require("./user/user.route"));
exports.userRoute = user_route_1.default;
const login_route_1 = __importDefault(require("./auth/login.route"));
exports.authRoute = login_route_1.default;
const record_route_1 = __importDefault(require("./record/record.route"));
exports.recordRoute = record_route_1.default;
const restaurant_route_1 = __importDefault(require("./restaurant/restaurant.route"));
exports.restRoute = restaurant_route_1.default;
//# sourceMappingURL=index.js.map
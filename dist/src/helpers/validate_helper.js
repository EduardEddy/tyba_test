"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateHelper = void 0;
const express_validator_1 = require("express-validator");
class ValidateHelper {
    constructor() {
        this.validateResult = (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                return next();
            }
            catch (error) {
                return res.status(422).json({
                    errors: error.errors
                });
            }
        };
    }
}
exports.ValidateHelper = ValidateHelper;
//# sourceMappingURL=validate_helper.js.map
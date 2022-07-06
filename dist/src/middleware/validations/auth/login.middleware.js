"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuth = void 0;
const express_validator_1 = require("express-validator");
const validate_helper_1 = require("../../../helpers/validate_helper");
const validation = new validate_helper_1.ValidateHelper;
exports.validateAuth = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Email cant be empty')
        .notEmpty().withMessage('it cant be empty'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('must be at least 6 chars long').notEmpty().withMessage('it cant be empty'),
    (req, res, next) => {
        validation.validateResult(req, res, next);
    }
];
//# sourceMappingURL=login.middleware.js.map
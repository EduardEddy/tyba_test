"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
const express_validator_1 = require("express-validator");
const validate_helper_1 = require("../../../helpers/validate_helper");
const user_1 = require("../../../models/user");
const validation = new validate_helper_1.ValidateHelper;
exports.validateCreate = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Email cant be empty')
        .notEmpty().withMessage('it cant be empty')
        .custom(value => {
        if (value !== undefined) {
            return user_1.User.findOne({ 'email': value }).exec().then(user => {
                if (user) {
                    return Promise.reject('E-mail already in use');
                }
            });
        }
    }),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('must be at least 6 chars long').notEmpty().withMessage('it cant be empty'),
    (0, express_validator_1.body)('name').notEmpty().withMessage('it cant be empty'),
    (0, express_validator_1.body)('last_name').notEmpty().withMessage('it cant be empty'),
    (req, res, next) => {
        validation.validateResult(req, res, next);
    }
];
//# sourceMappingURL=create.middleware.js.map
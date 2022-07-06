"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responses = void 0;
const responses = async (error, text) => {
    console.log(text);
    console.log(error);
    return {
        status: 500,
        message: 'Internal error'
    };
};
exports.responses = responses;
//# sourceMappingURL=response_error.js.map
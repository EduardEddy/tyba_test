"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringRandom(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function numberRandom() {
    return Math.floor(Math.random() * 99999);
}
exports.default = {
    stringRandom, numberRandom
};
//# sourceMappingURL=random_functions.js.map
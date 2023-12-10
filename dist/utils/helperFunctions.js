"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkAlphabets = (input) => {
    for (const char of input) {
        if (!(char >= "a" && char <= "z") &&
            !(char >= "A" && char <= "Z")) {
            return false;
        }
    }
    return true;
};
exports.default = checkAlphabets;

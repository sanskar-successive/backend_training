"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginSchema_1 = __importDefault(require("./schema/loginSchema"));
const registerSchema_1 = __importDefault(require("./schema/registerSchema"));
const validationConfig = {
    "login POST": loginSchema_1.default,
    "register POST": registerSchema_1.default,
};
exports.default = validationConfig;

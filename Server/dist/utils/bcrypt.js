"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
var bcrypt_1 = __importDefault(require("bcrypt"));
function hashPassword(password) {
    var salt = bcrypt_1.default.genSaltSync(+process.env.BCEYPT_SALT_ROUND);
    var hashedPassword = bcrypt_1.default.hashSync(password, salt);
    return hashedPassword;
}
function comparePassword(password, hashedPassword) {
    return bcrypt_1.default.compareSync(password, hashedPassword);
}

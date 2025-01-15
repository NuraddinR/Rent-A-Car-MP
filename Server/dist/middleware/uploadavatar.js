"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAvatar = void 0;
var uuid_1 = require("uuid");
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/avatar/");
    },
    filename: function (req, file, cb) {
        var fileExtension = file.originalname.split(".").pop();
        var uniqueSuffix = (0, uuid_1.v4)() + "." + fileExtension;
        var fileName = "avatar-" + uniqueSuffix;
        cb(null, fileName);
    },
});
exports.uploadAvatar = (0, multer_1.default)({ storage: storage });

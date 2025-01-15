"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var uuid_1 = require("uuid");
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/rent/");
    },
    filename: function (req, file, cb) {
        var fileExtension = file.originalname.split(".").pop();
        var uniqueSuffix = (0, uuid_1.v4)() + "." + fileExtension;
        var fileName = "rent-" + uniqueSuffix;
        cb(null, fileName);
    },
});
exports.upload = (0, multer_1.default)({ storage: storage });

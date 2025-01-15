"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFiles = deleteFiles;
exports.deleteFilesByPaths = deleteFilesByPaths;
var fs_1 = __importDefault(require("fs"));
function deleteFiles(files) {
    files.forEach(function (file) {
        fs_1.default.unlink(file.path, function (err) {
            if (err) {
                console.log(err);
            }
        });
    });
}
function deleteFilesByPaths(paths) {
    paths.forEach(function (path) {
        fs_1.default.unlink(path, function (err) {
            if (err) {
                console.log(err);
            }
        });
    });
}

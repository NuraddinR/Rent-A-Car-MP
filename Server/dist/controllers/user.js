"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../mongoose/schemas/user"));
var file_1 = require("../utils/file");
var currentUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        user = req.user;
        if (user === null || user === void 0 ? void 0 : user.avatar)
            user.avatar = "".concat(process.env.BASE_URL).concat(user.avatar);
        res.json({ user: user });
        return [2 /*return*/];
    });
}); };
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_1.default.find().select("-password -__v -resetPasswordToken -resetPasswordTokenExpires")];
            case 1:
                users = _a.sent();
                res.status(200).json({
                    message: "Users fetched successfully!",
                    users: users.map(function (user) {
                        user.avatar = "".concat(process.env.BASE_URL).concat(user.avatar);
                        return user;
                    }),
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_1, username, email, password, avatar, user, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                id = req.params.id;
                _a = req.body, name_1 = _a.name, username = _a.username, email = _a.email, password = _a.password, avatar = _a.avatar;
                return [4 /*yield*/, user_1.default.findById(id)];
            case 1:
                user = _b.sent();
                if (!user) {
                    res.status(404).json({ message: "User not found!" });
                    return [2 /*return*/];
                }
                if (name_1)
                    user.name = name_1;
                if (username)
                    user.username = username;
                if (email)
                    user.email = email;
                if (password)
                    user.password = password;
                if (avatar === "delete") {
                    if (user.avatar) {
                        (0, file_1.deleteFilesByPaths)([user.avatar]);
                        user.avatar = "";
                    }
                }
                if (req.file) {
                    if (user.avatar) {
                        (0, file_1.deleteFilesByPaths)([user.avatar]);
                    }
                    user.avatar = req.file.path;
                }
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                res.status(200).json({ message: "User updated successfully!" });
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                console.log(err_2);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.user._id;
                return [4 /*yield*/, user_1.default.findByIdAndDelete(id)];
            case 1:
                user = _a.sent();
                if (!user) {
                    res.status(404).json({ message: "User not found!" });
                    return [2 /*return*/];
                }
                if (user.avatar) {
                    (0, file_1.deleteFilesByPaths)([user.avatar]);
                }
                res.status(200).json({ message: "User deleted successfully!" });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log(err_3);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var userController = {
    currentUser: currentUser,
    getAll: getAll,
    update: update,
    remove: remove,
};
exports.default = userController;

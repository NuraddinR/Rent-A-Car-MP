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
var crypto_1 = __importDefault(require("crypto"));
var user_1 = __importDefault(require("../mongoose/schemas/user"));
var bcrypt_1 = require("../utils/bcrypt");
var mail_1 = require("../utils/mail");
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, name_1, username, alreadyExists, user, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password, name_1 = _a.name, username = _a.username;
                if (!name_1 || !email || !password) {
                    res.status(400).json({ message: "Please fill in all fields!" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, user_1.default.findOne({
                        $or: [{ email: email }, { username: username }],
                    })];
            case 1:
                alreadyExists = _b.sent();
                if (alreadyExists) {
                    res.status(400).json({ message: "User with this email already exists" });
                    return [2 /*return*/];
                }
                user = new user_1.default({
                    email: email,
                    username: username,
                    password: (0, bcrypt_1.hashPassword)(password),
                    name: name_1,
                });
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                res.send({ message: "User registered successfully" });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                console.error(err_1);
                res.status(500).json({ success: false, error: "Internal server error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        user = req.user;
        res.send({ message: "User logged in successfully.", user: user });
        return [2 /*return*/];
    });
}); };
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
var logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        req.logout(function (err) {
            if (err) {
                res.status(500).json({ message: "Internal server error!" });
            }
            res.send({ message: "User logged out successfully." });
        });
        return [2 /*return*/];
    });
}); };
var forgotPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, token, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                email = req.body.email;
                return [4 /*yield*/, user_1.default.findOne({ email: email })];
            case 1:
                user = _a.sent();
                if (!user) {
                    res.status(404).json({ message: "User not found!" });
                    return [2 /*return*/];
                }
                token = crypto_1.default.randomBytes(32).toString("hex");
                user.resetPasswordToken = token;
                user.resetPasswordTokenExpires = new Date(Date.now() + 1000 * 60 * 15);
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                return [4 /*yield*/, mail_1.transporter.sendMail({
                        from: '"Passport Auth 👻" <nuraddinvr@code.edu.az>',
                        to: email,
                        subject: "Reset Password",
                        html: "\n          <div style=\"font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 10px; border: 1px solid #e0e0e0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">\n            <h2 style=\"color: #333; font-size: 24px; margin-bottom: 20px;\">Reset Your Password</h2>\n            <p style=\"font-size: 16px; color: #555;\">Hi, ".concat(user.name, ",</p>\n            <p style=\"font-size: 16px; color: #555; margin-bottom: 20px;\">You requested to reset your password. To proceed, click the button below:</p>\n\n            <a href=\"").concat(process.env.CLIENT_URL, "/reset-password/").concat(token, "\" target=\"_blank\" \n              style=\"display: inline-block; padding: 12px 25px; margin: 20px 0; font-size: 16px; color: #fff; background-color: #007BFF; text-decoration: none; border-radius: 5px; text-align: center; font-weight: bold;\">\n              Reset Password\n            </a>\n\n            <p style=\"font-size: 16px; color: #555; margin-bottom: 20px;\">If you didn\u2019t request this, you can safely ignore this email.</p>\n            <p style=\"font-size: 16px; color: #555;\">Thanks,<br>The Passport Auth Team</p>\n\n            <hr style=\"border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;\"/>\n\n            <p style=\"font-size: 14px; color: #777; text-align: center;\">If the button above doesn't work, copy and paste the following link into your browser:</p>\n            <p style=\"font-size: 14px; color: #007BFF; text-align: center;\">\n              <a href=\"").concat(process.env.CLIENT_URL, "/reset-password/").concat(token, "\" style=\"color: #007BFF; text-decoration: none;\">").concat(process.env.CLIENT_URL, "/reset-password/").concat(token, "</a>\n            </p>\n          </div>"),
                    })];
            case 3:
                _a.sent();
                res.json({ message: "Password reset email sent successfully." });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var resetPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, password, user, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, token = _a.token, password = _a.password;
                return [4 /*yield*/, user_1.default.findOne({
                        resetPasswordToken: token,
                        resetPasswordTokenExpires: { $gt: Date.now() },
                    })];
            case 1:
                user = _b.sent();
                if (!user) {
                    res.status(400).json({ message: "Invalid or expired token!" });
                    return [2 /*return*/];
                }
                user.password = (0, bcrypt_1.hashPassword)(password);
                user.resetPasswordToken = "";
                user.resetPasswordTokenExpires = new Date(0);
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                res.json({ message: "Password reset succesfully." });
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                console.log(err_3);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var authController = {
    register: register,
    login: login,
    currentUser: currentUser,
    logout: logout,
    forgotPassword: forgotPassword,
    resetPassword: resetPassword,
};
exports.default = authController;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var passport_1 = __importDefault(require("passport"));
var passport_local_1 = require("passport-local");
var user_1 = __importDefault(require("../mongoose/schemas/user"));
var bcrypt_1 = require("../utils/bcrypt");
passport_1.default.serializeUser(function (user, done) {
    done(null, user._id);
});
passport_1.default.deserializeUser(function (id, done) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_1;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_1.default.findById(id).select("-password -__v -resetPasswordToken -resetPasswordTokenExpires")];
                case 1:
                    user = _e.sent();
                    if (!user) {
                        return [2 /*return*/, done(null, false)];
                    }
                    done(null, __assign(__assign({}, ((_a = user.toObject()) !== null && _a !== void 0 ? _a : {})), { _id: user._id.toString(), role: user.role, favorites: user.favorites.map(function (favorite) { return favorite.toString(); }), resetPasswordTokenExpires: (_b = user.resetPasswordTokenExpires) === null || _b === void 0 ? void 0 : _b.toString(), createdAt: (_c = user.createdAt) === null || _c === void 0 ? void 0 : _c.toString(), updatedAt: (_d = user.updatedAt) === null || _d === void 0 ? void 0 : _d.toString() }));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _e.sent();
                    done(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: "email",
}, function (email, password, done) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_2;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_1.default.findOne({ email: email })];
                case 1:
                    user = _d.sent();
                    if (!user) {
                        return [2 /*return*/, done(null, false, { message: "Invalid Credentials!" })];
                    }
                    if (!(0, bcrypt_1.comparePassword)(password, user.password)) {
                        return [2 /*return*/, done(null, false, { message: "Invalid Credentials!" })];
                    }
                    return [2 /*return*/, done(null, __assign(__assign({}, ((_a = user.toObject()) !== null && _a !== void 0 ? _a : {})), { _id: user._id.toString(), role: user.role, favorites: user.favorites.map(function (favorite) { return favorite.toString(); }), password: undefined, resetPasswordToken: undefined, resetPasswordTokenExpires: undefined, createdAt: (_b = user.createdAt) === null || _b === void 0 ? void 0 : _b.toString(), updatedAt: (_c = user.updatedAt) === null || _c === void 0 ? void 0 : _c.toString() }))];
                case 2:
                    error_2 = _d.sent();
                    done(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}));

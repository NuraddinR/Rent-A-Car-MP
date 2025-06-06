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
var category_1 = __importDefault(require("../mongoose/schemas/category"));
var rent_1 = __importDefault(require("../mongoose/schemas/rent"));
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categories, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, category_1.default.find()];
            case 1:
                categories = _a.sent();
                res.status(200).json({
                    message: "Categories fetched successfully!",
                    // count: categories.length,
                    items: categories,
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
var getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, category, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, category_1.default.findById(id)];
            case 1:
                category = _a.sent();
                if (!category) {
                    res.status(404).json({ message: "Category not found!" });
                    return [2 /*return*/];
                }
                res.status(200).json({
                    message: "Category fetched successfully!",
                    item: category,
                });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, category, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                title = req.matchedData.title;
                return [4 /*yield*/, category_1.default.create({ title: title })];
            case 1:
                category = _a.sent();
                res.status(201).json({
                    message: "Category created successfully",
                    item: category,
                });
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
var edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, title, category, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                title = req.matchedData.title;
                return [4 /*yield*/, category_1.default.findByIdAndUpdate(id, { title: title })];
            case 1:
                category = _a.sent();
                if (!category) {
                    res.status(404).json({ message: "Category not found!" });
                    return [2 /*return*/];
                }
                res.status(200).json({
                    message: "Category updated successfully!",
                    item: category,
                });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                console.log(err_4);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, hasAnyRent, category, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, rent_1.default.findOne({
                        category: id,
                    })];
            case 1:
                hasAnyRent = _a.sent();
                if (hasAnyRent) {
                    res.status(400).json({ message: "Category is in use!" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, category_1.default.findByIdAndDelete(id)];
            case 2:
                category = _a.sent();
                if (!category) {
                    res.status(404).json({ message: "Category not found!" });
                    return [2 /*return*/];
                }
                res.status(200).json({ message: "Category deleted successfully!" });
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.log(err_5);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var categoryController = {
    getAll: getAll,
    getById: getById,
    create: create,
    edit: edit,
    remove: remove,
};
exports.default = categoryController;

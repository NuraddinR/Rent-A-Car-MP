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
var user_1 = __importDefault(require("../mongoose/schemas/user"));
var rent_1 = __importDefault(require("../mongoose/schemas/rent"));
var getAllPagination = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        user = req.user;
        res.status(200).json({
            favorites: user === null || user === void 0 ? void 0 : user.favorites,
            message: "Favorites fetched successfully!",
        });
        return [2 /*return*/];
    });
}); };
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, search, dropOffLocation, pickUpLocation, minPrice, maxPrice, categories, capacities, _b, skip, _c, take, showInRecommendation, user, userFavorites, filter, rents, count, err_1;
    var _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _o.trys.push([0, 3, , 4]);
                _a = req.matchedData, search = _a.search, dropOffLocation = _a.dropOffLocation, pickUpLocation = _a.pickUpLocation, minPrice = _a.minPrice, maxPrice = _a.maxPrice, categories = _a.categories, capacities = _a.capacities, _b = _a.skip, skip = _b === void 0 ? 0 : _b, _c = _a.take, take = _c === void 0 ? 10 : _c, showInRecommendation = _a.showInRecommendation;
                user = req.user;
                userFavorites = user === null || user === void 0 ? void 0 : user.favorites;
                filter = {
                    $or: [],
                    $and: [
                        {
                            _id: { $in: userFavorites },
                        },
                    ],
                };
                if (showInRecommendation) {
                    (_d = filter.$and) === null || _d === void 0 ? void 0 : _d.push({
                        showInRecommendation: showInRecommendation === "true",
                    });
                }
                if (search) {
                    (_e = filter.$or) === null || _e === void 0 ? void 0 : _e.push({
                        title: { $regex: search, $options: "i" },
                    });
                    (_f = filter.$or) === null || _f === void 0 ? void 0 : _f.push({
                        description: { $regex: search, $options: "i" },
                    });
                }
                if (dropOffLocation) {
                    (_g = filter.$and) === null || _g === void 0 ? void 0 : _g.push({
                        dropOffLocations: {
                            $in: [dropOffLocation],
                        },
                    });
                }
                if (pickUpLocation) {
                    (_h = filter.$and) === null || _h === void 0 ? void 0 : _h.push({
                        pickUpLocations: {
                            $in: [pickUpLocation],
                        },
                    });
                }
                if (capacities === null || capacities === void 0 ? void 0 : capacities.length) {
                    (_j = filter.$and) === null || _j === void 0 ? void 0 : _j.push({
                        capacity: { $in: capacities },
                    });
                }
                if (categories === null || categories === void 0 ? void 0 : categories.length) {
                    (_k = filter.$and) === null || _k === void 0 ? void 0 : _k.push({
                        category: { $in: categories },
                    });
                }
                if (minPrice) {
                    (_l = filter.$and) === null || _l === void 0 ? void 0 : _l.push({
                        price: { $gte: minPrice },
                    });
                }
                if (maxPrice) {
                    (_m = filter.$and) === null || _m === void 0 ? void 0 : _m.push({
                        price: { $lte: maxPrice },
                    });
                }
                return [4 /*yield*/, rent_1.default.find(filter)
                        .populate(["category", "pickUpLocations", "dropOffLocations"])
                        .skip(+skip)
                        .limit(+take)];
            case 1:
                rents = _o.sent();
                return [4 /*yield*/, rent_1.default.countDocuments(filter)];
            case 2:
                count = _o.sent();
                res.status(200).json({
                    message: "Favorites fetched successfully!",
                    skip: +skip,
                    take: +take,
                    count: count,
                    items: rents.map(function (rent) { return (__assign(__assign({}, rent.toObject()), { imageUrls: rent.imageUrls.map(function (url) { return "".concat(process.env.BASE_URL).concat(url); }) })); }),
                });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _o.sent();
                console.log(err_1);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var toggle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id_1, user_2, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id_1 = req.params.id;
                user_2 = req.user;
                if (user_2 === null || user_2 === void 0 ? void 0 : user_2.favorites.includes(id_1)) {
                    Array.from(user_2 === null || user_2 === void 0 ? void 0 : user_2.favorites).forEach(function (favorite, index) {
                        if (favorite === id_1) {
                            user_2 === null || user_2 === void 0 ? void 0 : user_2.favorites.splice(index, 1);
                        }
                    });
                }
                else {
                    user_2 === null || user_2 === void 0 ? void 0 : user_2.favorites.push(id_1);
                }
                return [4 /*yield*/, user_1.default.findByIdAndUpdate(user_2 === null || user_2 === void 0 ? void 0 : user_2._id, { favorites: user_2 === null || user_2 === void 0 ? void 0 : user_2.favorites })];
            case 1:
                _a.sent();
                res.status(200).json({ message: "Favorite updated successfully!" });
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
var favoriteController = {
    getAllPagination: getAllPagination,
    getAll: getAll,
    toggle: toggle,
};
exports.default = favoriteController;

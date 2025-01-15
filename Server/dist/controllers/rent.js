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
var category_1 = __importDefault(require("../mongoose/schemas/category"));
var location_1 = __importDefault(require("../mongoose/schemas/location"));
var file_1 = require("../utils/file");
var rent_1 = __importDefault(require("../mongoose/schemas/rent"));
var reservation_1 = __importDefault(require("../mongoose/schemas/reservation"));
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, search, dropOffLocation, pickUpLocation, minPrice, maxPrice, categories, capacities, _b, skip, _c, take, showInRecommendation, filter, rents, count, err_1;
    var _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _o.trys.push([0, 3, , 4]);
                _a = req.matchedData, search = _a.search, dropOffLocation = _a.dropOffLocation, pickUpLocation = _a.pickUpLocation, minPrice = _a.minPrice, maxPrice = _a.maxPrice, categories = _a.categories, capacities = _a.capacities, _b = _a.skip, skip = _b === void 0 ? 0 : _b, _c = _a.take, take = _c === void 0 ? 10 : _c, showInRecommendation = _a.showInRecommendation;
                filter = {
                    $or: [],
                    $and: [],
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
                    message: "Rents fetched successfully!",
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
var getPopular = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reservations, rentCount_1, popularRentIds, topRents, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, reservation_1.default.find()];
            case 1:
                reservations = _a.sent();
                rentCount_1 = {};
                reservations.forEach(function (reservation) {
                    var rentId = reservation.rent.toString();
                    rentCount_1[rentId] = (rentCount_1[rentId] || 0) + 1;
                });
                popularRentIds = Object.entries(rentCount_1)
                    .sort(function (a, b) { return b[1] - a[1]; })
                    .slice(0, 4)
                    .map(function (_a) {
                    var rentId = _a[0];
                    return rentId;
                });
                return [4 /*yield*/, rent_1.default.find({
                        _id: { $in: popularRentIds },
                    }).populate(["category", "pickUpLocations", "dropOffLocations"])];
            case 2:
                topRents = _a.sent();
                res.status(200).json({
                    message: "Popular rents fetched successfully!",
                    items: topRents.map(function (rent) { return (__assign(__assign({}, rent.toObject()), { imageUrls: rent.imageUrls.map(function (url) { return "".concat(process.env.BASE_URL).concat(url); }) })); }),
                });
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, rent, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, rent_1.default.findById(id).populate([
                        "category",
                        "pickUpLocations",
                        "dropOffLocations",
                    ])];
            case 1:
                rent = _a.sent();
                if (!rent) {
                    res.status(404).json({ message: "Rent not found!" });
                    return [2 /*return*/];
                }
                res.status(200).json({
                    message: "Rent fetched successfully!",
                    item: __assign(__assign({}, rent.toObject()), { imageUrls: rent.imageUrls.map(function (url) { return "".concat(process.env.BASE_URL).concat(url); }) }),
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
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, fuel, gear, capacity, price, discountPrice, category, pickUpLocations, dropOffLocations, showInRecommendation, promises, _b, categoryExists, pickUpLocationsExistsCount, dropOffLocationsExistsCount, rent, err_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 6]);
                _a = req.matchedData, title = _a.title, description = _a.description, fuel = _a.fuel, gear = _a.gear, capacity = _a.capacity, price = _a.price, discountPrice = _a.discountPrice, category = _a.category, pickUpLocations = _a.pickUpLocations, dropOffLocations = _a.dropOffLocations, showInRecommendation = _a.showInRecommendation;
                promises = [
                    category_1.default.findById(category),
                    location_1.default.countDocuments({ _id: { $in: pickUpLocations } }),
                    location_1.default.countDocuments({ _id: { $in: dropOffLocations } }),
                ];
                return [4 /*yield*/, Promise.all(promises)];
            case 1:
                _b = _c.sent(), categoryExists = _b[0], pickUpLocationsExistsCount = _b[1], dropOffLocationsExistsCount = _b[2];
                if (!categoryExists) {
                    (0, file_1.deleteFiles)(req.files);
                    res.status(400).json({ message: "Category not found!" });
                    return [2 /*return*/];
                }
                if (pickUpLocations.length !== pickUpLocationsExistsCount) {
                    (0, file_1.deleteFiles)(req.files);
                    res.status(400).json({ message: "Pick up location not found!" });
                    return [2 /*return*/];
                }
                if (dropOffLocations.length !== dropOffLocationsExistsCount) {
                    (0, file_1.deleteFiles)(req.files);
                    res.status(400).json({ message: "Drop off location not found!" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, rent_1.default.create({
                        title: title,
                        description: description,
                        fuel: fuel,
                        gear: gear,
                        capacity: capacity,
                        price: price,
                        discountPrice: discountPrice,
                        category: category,
                        pickUpLocations: pickUpLocations,
                        dropOffLocations: dropOffLocations,
                        showInRecommendation: showInRecommendation === "true",
                        imageUrls: req.files.map(function (file) {
                            return file.path.replace(/\\/g, "/");
                        }),
                    })];
            case 2:
                rent = _c.sent();
                if (!(typeof categoryExists !== "number")) return [3 /*break*/, 4];
                categoryExists.rents.push(rent._id);
                return [4 /*yield*/, categoryExists.save()];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4:
                res.status(201).json({ message: "Rent created successfully", item: rent });
                return [3 /*break*/, 6];
            case 5:
                err_4 = _c.sent();
                console.log(err_4);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, description, fuel, gear, capacity, price, discountPrice, category, pickUpLocations, dropOffLocations, showInRecommendation, rent, promises, _b, categoryExists, pickUpLocationsExistsCount, dropOffLocationsExistsCount, err_5;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 7, , 8]);
                id = req.params.id;
                _a = req.matchedData, title = _a.title, description = _a.description, fuel = _a.fuel, gear = _a.gear, capacity = _a.capacity, price = _a.price, discountPrice = _a.discountPrice, category = _a.category, pickUpLocations = _a.pickUpLocations, dropOffLocations = _a.dropOffLocations, showInRecommendation = _a.showInRecommendation;
                return [4 /*yield*/, rent_1.default.findById(id).populate([
                        "category",
                        "pickUpLocations",
                        "dropOffLocations",
                    ])];
            case 1:
                rent = _d.sent();
                if (!rent) {
                    res.status(404).json({ message: "Rent not found!" });
                    return [2 /*return*/];
                }
                promises = [
                    category_1.default.findById(category),
                    location_1.default.countDocuments({ _id: { $in: pickUpLocations } }),
                    location_1.default.countDocuments({ _id: { $in: dropOffLocations } }),
                ];
                return [4 /*yield*/, Promise.all(promises)];
            case 2:
                _b = _d.sent(), categoryExists = _b[0], pickUpLocationsExistsCount = _b[1], dropOffLocationsExistsCount = _b[2];
                if (!categoryExists) {
                    (0, file_1.deleteFiles)(req.files);
                    res.status(400).json({ message: "Category not found!" });
                    return [2 /*return*/];
                }
                if (pickUpLocations.length !== pickUpLocationsExistsCount) {
                    (0, file_1.deleteFiles)(req.files);
                    res.status(400).json({ message: "Pick up location not found!" });
                    return [2 /*return*/];
                }
                if (dropOffLocations.length !== dropOffLocationsExistsCount) {
                    (0, file_1.deleteFiles)(req.files);
                    res.status(400).json({ message: "Drop off location not found!" });
                    return [2 /*return*/];
                }
                rent.title = title;
                rent.description = description;
                rent.fuel = fuel;
                rent.gear = gear;
                rent.capacity = capacity;
                rent.price = price;
                rent.discountPrice = discountPrice;
                rent.pickUpLocations = pickUpLocations;
                rent.dropOffLocations = dropOffLocations;
                rent.showInRecommendation = showInRecommendation === "true";
                if ((_c = req.files) === null || _c === void 0 ? void 0 : _c.length) {
                    (0, file_1.deleteFilesByPaths)(rent.imageUrls);
                    rent.imageUrls = req.files.map(function (file) {
                        return file.path.replace(/\\/g, "/");
                    });
                }
                if (!(rent.category.toString() !== category &&
                    typeof categoryExists !== "number")) return [3 /*break*/, 5];
                categoryExists.rents.push(rent._id);
                return [4 /*yield*/, categoryExists.save()];
            case 3:
                _d.sent();
                return [4 /*yield*/, category_1.default.findByIdAndUpdate(rent.category, {
                        $pull: { rents: rent._id },
                    })];
            case 4:
                _d.sent();
                rent.category = category;
                _d.label = 5;
            case 5: return [4 /*yield*/, rent.save()];
            case 6:
                _d.sent();
                res.status(200).json({ message: "Rent updated successfully.", item: rent });
                return [3 /*break*/, 8];
            case 7:
                err_5 = _d.sent();
                console.log(err_5);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, rent, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, rent_1.default.findByIdAndDelete(id)];
            case 1:
                rent = _a.sent();
                if (!rent) {
                    res.status(404).json({ message: "Rent not found!" });
                    return [2 /*return*/];
                }
                (0, file_1.deleteFilesByPaths)(rent.imageUrls);
                res.status(200).json({ message: "Rent deleted successfully!" });
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                console.log(err_6);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var rentController = {
    getAll: getAll,
    getPopular: getPopular,
    getById: getById,
    create: create,
    edit: edit,
    remove: remove,
};
exports.default = rentController;

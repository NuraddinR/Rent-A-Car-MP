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
var reservation_1 = __importDefault(require("../mongoose/schemas/reservation"));
var rent_1 = __importDefault(require("../mongoose/schemas/rent"));
var location_1 = __importDefault(require("../mongoose/schemas/location"));
var utils_1 = require("../utils");
var reservation_2 = require("../types/reservation");
var user_1 = require("../types/user");
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, filter, reservation, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.user;
                filter = {};
                if (user.role !== "admin") {
                    filter.customer = user._id;
                }
                return [4 /*yield*/, reservation_1.default.find(filter)
                        .populate("rent", "title price discountPrice description imageUrls")
                        .populate("pickUpLocation")
                        .populate("dropOffLocation")];
            case 1:
                reservation = _a.sent();
                reservation.forEach(function (reservation) {
                    reservation.rent.imageUrls = reservation.rent.imageUrls.map(function (url) {
                        if (url.startsWith("http"))
                            return url;
                        return "".concat(process.env.BASE_URL).concat(url);
                    });
                });
                res.status(200).json({
                    message: "Reservations fetched successfully!",
                    items: reservation,
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
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, billing, pickUpLocation, pickUpDate, dropOffLocation, dropOffDate, rent, _b, rentExists, pickUpLocationExists, dropOffLocationExists, reservationExists, rentDays, total, reservation, err_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                _a = req.matchedData, billing = _a.billing, pickUpLocation = _a.pickUpLocation, pickUpDate = _a.pickUpDate, dropOffLocation = _a.dropOffLocation, dropOffDate = _a.dropOffDate, rent = _a.rent;
                return [4 /*yield*/, Promise.all([
                        rent_1.default.findById(rent),
                        location_1.default.findById(pickUpLocation),
                        location_1.default.findById(dropOffLocation),
                    ])];
            case 1:
                _b = _c.sent(), rentExists = _b[0], pickUpLocationExists = _b[1], dropOffLocationExists = _b[2];
                if (!rentExists || !pickUpLocationExists || !dropOffLocationExists) {
                    res.status(400).json({ message: "Invalid data!" });
                    return [2 /*return*/];
                }
                if (new Date(pickUpDate) > new Date(dropOffDate)) {
                    res
                        .status(400)
                        .json({ message: " Pick up date should be less than drop off date!" });
                    return [2 /*return*/];
                }
                if (new Date(pickUpDate) < new Date()) {
                    res
                        .status(400)
                        .json({ message: "Pick up date should be greater than current date!" });
                    return [2 /*return*/];
                }
                if (new Date(dropOffDate) < new Date()) {
                    res.status(400).json({
                        message: "Drop off date should be greater than current date!",
                    });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, reservation_1.default.findOne({
                        rent: rent,
                        dropOffDate: {
                            $gte: pickUpDate,
                        },
                        pickUpDate: {
                            $lte: dropOffDate,
                        },
                    })];
            case 2:
                reservationExists = _c.sent();
                if (reservationExists) {
                    res
                        .status(400)
                        .json({ message: "Rent is not available between theese dates." });
                    return [2 /*return*/];
                }
                rentDays = (0, utils_1.calculateDaysBetween)(new Date(pickUpDate), new Date(dropOffDate));
                total = (rentExists.discountPrice || rentExists.price) * rentDays;
                return [4 /*yield*/, reservation_1.default.create({
                        billingInfo: billing,
                        pickUpLocation: pickUpLocation,
                        pickUpDate: pickUpDate,
                        dropOffLocation: dropOffLocation,
                        dropOffDate: dropOffDate,
                        rent: rent,
                        customer: req.user._id,
                        total: total,
                    })];
            case 3:
                reservation = _c.sent();
                res.status(201).json({
                    message: "Reservation created successfully!",
                    item: reservation,
                });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _c.sent();
                console.log(err_2);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var changeStatus = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, role, status_1, reservation, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                role = req.user.role;
                status_1 = req.matchedData.status;
                if (status_1 !== reservation_2.ReservationStatus.Cancelled && role !== user_1.UserRole.ADMIN) {
                    res
                        .status(403)
                        .json({ message: "You are not allowed to change status!" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, reservation_1.default.findById(id)];
            case 1:
                reservation = _a.sent();
                if (!reservation) {
                    res.status(404).json({ message: "Reservation not found!" });
                    return [2 /*return*/];
                }
                if (reservation.status === status_1) {
                    res.status(400).json({ message: "Reservation already has this status!" });
                    return [2 /*return*/];
                }
                if (reservation.status === reservation_2.ReservationStatus.Cancelled) {
                    res.status(400).json({ message: "Reservation is already cancelled!" });
                    return [2 /*return*/];
                }
                if (reservation.status !== reservation_2.ReservationStatus.Pending &&
                    status_1 === reservation_2.ReservationStatus.Cancelled) {
                    res
                        .status(400)
                        .json({ message: "You can only cancel pending reservations!" });
                    return [2 /*return*/];
                }
                if (status_1 === reservation_2.ReservationStatus.Approved &&
                    reservation.status !== reservation_2.ReservationStatus.Pending) {
                    res
                        .status(400)
                        .json({ message: "You can only approve pending reservations!" });
                    return [2 /*return*/];
                }
                reservation.status = status_1;
                return [4 /*yield*/, reservation.save()];
            case 2:
                _a.sent();
                res.status(200).json({
                    message: "Reservation status changed successfully!",
                    item: reservation,
                });
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.log(err_3);
                res.status(500).json({ message: "Internal server error!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var reservationController = {
    getAll: getAll,
    create: create,
    changeStatus: changeStatus,
};
exports.default = reservationController;

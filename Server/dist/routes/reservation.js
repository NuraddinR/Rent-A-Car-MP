"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var reservation_1 = __importDefault(require("../controllers/reservation"));
var validate_1 = __importDefault(require("../middleware/validate"));
var reservation_2 = require("../validation/reservation");
var router = (0, express_1.Router)();
router.get("/", (0, auth_1.authorize)({}), reservation_1.default.getAll);
router.post("/", (0, auth_1.authorize)({}), (0, validate_1.default)(reservation_2.createReservationSchema), reservation_1.default.create);
router.put("/change-status/:id", (0, auth_1.authorize)({}), (0, validate_1.default)(reservation_2.changeReservationStatusSchema), reservation_1.default.changeStatus);
exports.default = router;

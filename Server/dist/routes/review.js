"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var review_1 = __importDefault(require("../controllers/review"));
var validate_1 = __importDefault(require("../middleware/validate"));
var review_2 = require("../validation/review");
var router = (0, express_1.Router)();
router.get("/", (0, auth_1.authorize)({ isAdmin: true }), review_1.default.getAll);
router.get("/:rentId", review_1.default.getByRentId);
router.post("/", (0, auth_1.authorize)({}), (0, validate_1.default)(review_2.createReviewSchema), review_1.default.create);
router.put("/change-status/:id", (0, auth_1.authorize)({ isAdmin: true }), (0, validate_1.default)(review_2.ChangeReviewStatusSchema), review_1.default.changeStatus);
exports.default = router;

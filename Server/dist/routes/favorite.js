"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var favorite_1 = __importDefault(require("../controllers/favorite"));
var validate_1 = __importDefault(require("../middleware/validate"));
var rent_1 = require("../validation/rent");
var router = (0, express_1.Router)();
router.get("/", (0, validate_1.default)(rent_1.getAllRentSchema), favorite_1.default.getAll);
router.get("/pagination-favorite", favorite_1.default.getAllPagination);
router.post("/:id", (0, auth_1.authorize)(), favorite_1.default.toggle);
exports.default = router;

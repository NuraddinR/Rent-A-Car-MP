"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var rent_1 = __importDefault(require("../controllers/rent"));
var validate_1 = __importDefault(require("../middleware/validate"));
var rent_2 = require("../validation/rent");
var upload_1 = require("../middleware/upload");
var router = (0, express_1.Router)();
router.get("/", (0, validate_1.default)(rent_2.getAllRentSchema), rent_1.default.getAll);
router.get("/popular", rent_1.default.getPopular);
router.get("/:id", rent_1.default.getById);
router.post("/", (0, auth_1.authorize)({ isAdmin: true }), upload_1.upload.array("images", 10), (0, validate_1.default)(rent_2.createRentSchema), rent_1.default.create);
router.put("/:id", (0, auth_1.authorize)({ isAdmin: true }), upload_1.upload.array("images", 10), (0, validate_1.default)(rent_2.editRentSchema), rent_1.default.edit);
router.delete("/:id", (0, auth_1.authorize)({ isAdmin: true }), rent_1.default.remove);
exports.default = router;

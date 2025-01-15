"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var location_1 = __importDefault(require("../controllers/location"));
var validate_1 = __importDefault(require("../middleware/validate"));
var location_2 = require("../validation/location");
var router = (0, express_1.Router)();
router.get("/", location_1.default.getAll);
router.get("/:id", location_1.default.getById);
router.post("/", (0, auth_1.authorize)({ isAdmin: true }), (0, validate_1.default)(location_2.createLocationSchema), location_1.default.create);
router.put("/:id", (0, validate_1.default)(location_2.editLocationSchema), (0, auth_1.authorize)({ isAdmin: true }), location_1.default.edit);
router.delete("/:id", (0, auth_1.authorize)({ isAdmin: true }), location_1.default.remove);
exports.default = router;

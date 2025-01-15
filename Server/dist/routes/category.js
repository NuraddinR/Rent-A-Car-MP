"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var validate_1 = __importDefault(require("../middleware/validate"));
var category_1 = __importDefault(require("../controllers/category"));
var category_2 = require("../validation/category");
var router = (0, express_1.Router)();
router.get("/", category_1.default.getAll);
router.get("/:id", category_1.default.getById);
router.post("/", (0, auth_1.authorize)({ isAdmin: true }), (0, validate_1.default)(category_2.createCategorySchema), category_1.default.create);
router.put("/:id", (0, validate_1.default)(category_2.editCategorySchema), (0, auth_1.authorize)({ isAdmin: true }), category_1.default.edit);
router.delete("/:id", (0, auth_1.authorize)({ isAdmin: true }), category_1.default.remove);
exports.default = router;

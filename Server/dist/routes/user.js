"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var user_1 = __importDefault(require("../controllers/user"));
var validate_1 = __importDefault(require("../middleware/validate"));
var user_2 = require("../validation/user");
var uploadavatar_1 = require("../middleware/uploadavatar");
var router = (0, express_1.Router)();
router.get("/", (0, auth_1.authorize)({ isAdmin: true }), user_1.default.getAll);
router.put("/:id", uploadavatar_1.uploadAvatar.single("avatar"), (0, validate_1.default)(user_2.editUserSchema), (0, auth_1.authorize)(), user_1.default.update);
router.delete("/", (0, auth_1.authorize)(), user_1.default.remove);
exports.default = router;

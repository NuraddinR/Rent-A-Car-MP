"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("../controllers/auth"));
var auth_2 = require("../middleware/auth");
var router = (0, express_1.Router)();
router.post("/login", auth_2.authenticate, auth_1.default.login);
router.post("/register", auth_1.default.register);
router.get("/current-user", (0, auth_2.authorize)(), auth_1.default.currentUser);
router.post("/logout", auth_1.default.logout);
router.post("/forgot-password", auth_1.default.forgotPassword);
router.post("/reset-password", auth_1.default.resetPassword);
exports.default = router;

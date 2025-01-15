"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var categorySchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    rents: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "Rent",
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
var Category = mongoose_1.default.model("Category", categorySchema);
exports.default = Category;

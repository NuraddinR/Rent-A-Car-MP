"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUserSchema = void 0;
exports.editUserSchema = {
    avatar: {
        in: ["body"],
        custom: {
            options: function (value) {
                if (value) {
                    return typeof value === "string";
                }
                return true;
            },
        },
        optional: true,
    },
    name: {
        in: ["body"],
        custom: {
            options: function (value) {
                if (value) {
                    return typeof value === "string";
                }
                return true;
            },
        },
    },
    username: {
        in: ["body"],
        custom: {
            options: function (value) {
                if (value) {
                    return typeof value === "string";
                }
                return true;
            },
        },
    },
    email: {
        in: ["body"],
        custom: {
            options: function (value) {
                if (value) {
                    return typeof value === "string";
                }
                return true;
            },
        },
    },
};

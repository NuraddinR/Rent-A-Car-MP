import { Schema } from "express-validator";

export const editUserSchema: Schema = {
  avatar: {
    in: ["body"],
    custom: {
      options: (value) => {
        if (value) {
          return value instanceof Array;
        }
        return true;
      },
    },
    optional: true,
  },
  name: {
    in: ["body"],
    custom: {
      options: (value) => {
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
      options: (value) => {
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
      options: (value) => {
        if (value) {
          return typeof value === "string";
        }
        return true;
      },
    },
  },
};

import { Schema } from "express-validator";

export const createReservationSchema: Schema = {
    "billing.name": {
      in: ["body"],
      isString: true,
      notEmpty: true,
    },
};


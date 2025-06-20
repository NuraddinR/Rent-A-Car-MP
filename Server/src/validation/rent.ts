import { Schema } from "express-validator";

export const getAllRentSchema: Schema = {
  skip: {
    in: ["query"],
    optional: true,
    isNumeric: true,
  },
  take: {
    in: ["query"],
    optional: true,
    isNumeric: true,
    default: {
      options: 10,
    },
  },
  search: {
    in: ["query"],
    optional: true,
    isString: true,
  },
  pickUpLocation: {
    in: ["query"],
    optional: true,
    isMongoId: true,
  },
  dropOffLocation: {
    in: ["query"],
    optional: true,
    isMongoId: true,
  },
  categories: {
    in: ["query"],
    optional: true,
    isArray: true,
    custom: {
      errorMessage: "Categories should be an array of mogo ids",
      options: (value) => {
        return value.every((v: string) => v.match(/^[0-9a-fA-F]{24}$/));
      },
    },
  },
  capacities: {
    in: ["query"],
    optional: true,
    isArray: true,
    custom: {
      errorMessage: "Capacity should be an array of numbers",
      options: (value) => {
        return value.every((v: string) => !isNaN(parseInt(v)));
      },
    },
  },
  maxPrice: {
    in: ["query"],
    optional: true,
    isNumeric: true,
  },
  minPrice: {
    in: ["query"],
    optional: true,
    isNumeric: true,
  },
  showInRecommendation: {
    in: ["query"],
    optional: true,
    isBoolean: true,
  },
};

export const createRentSchema: Schema = {
  images: {
    custom: {
      errorMessage: "At least 4 image is required",
      options: (_, { req }) => {
        return req.files && req.files?.length >= 4;
      },
    },
  },
  title: {
    in: ["body"],
    isString: true,
    notEmpty: true,
    isLength: {
      errorMessage: "Title must be at least 5 characters long",
      options: { min: 5 },
    },
  },
  description: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  fuel: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  gear: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  capacity: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  price: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  discountPrice: {
    in: ["body"],
    isNumeric: true,
    optional: true,
  },
  category: {
    in: ["body"],
    isMongoId: true,
    notEmpty: true,
  },
  pickUpLocations: {
    in: ["body"],
    isArray: {
      options: { min: 1 },
    },
    notEmpty: true,
  },
  dropOffLocations: {
    in: ["body"],
    isArray: {
      options: { min: 1 },
    },
    notEmpty: true,
  },
  showInRecommendation: {
    in: ["body"],
    isBoolean: true,
    notEmpty: true,
  },
};

export const editRentSchema: Schema = {
  title: {
    in: ["body"],
    isString: true,
    notEmpty: true,
    isLength: {
      errorMessage: "Title must be at least 5 characters long",
      options: { min: 5 },
    },
  },
  description: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  fuel: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  gear: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  capacity: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  price: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  discountPrice: {
    in: ["body"],
    isNumeric: true,
    optional: true,
  },
  category: {
    in: ["body"],
    isMongoId: true,
    notEmpty: true,
  },
  pickUpLocations: {
    in: ["body"],
    isArray: {
      options: { min: 1 },
    },
    notEmpty: true,
  },
  dropOffLocations: {
    in: ["body"],
    isArray: {
      options: { min: 1 },
    },
    notEmpty: true,
  },
  showInRecommendation: {
    in: ["body"],
    isBoolean: true,
    notEmpty: true,
  },
};

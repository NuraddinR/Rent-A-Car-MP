import { Category } from "@/types";

export type GetAllCategoriesResponse = {
  message: string;
  items: Category[];
};

export type CategoryPayload = {
  title: string;
};

export type CategoryResponse = {
  item?: Category;
  message: string;
};

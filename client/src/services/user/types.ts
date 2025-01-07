import { User } from "@/types";

export type GetAllUsersResponse = {
  message: string;
  items: User[];
};

export type UserResponse = {
  success: boolean;
  message: string;
  item: User;
};

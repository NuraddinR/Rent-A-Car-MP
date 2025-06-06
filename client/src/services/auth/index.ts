import axiosInstance from "../axiosInstance";
import {
  RegisterPayload,
  RegisterResponse,
  LoginPayload,
  LoginResponse,
  GetCurrentUser,
} from "./types";

async function register(data: RegisterPayload) {
  return await axiosInstance.post<RegisterResponse>("/auth/register", data);
}

async function login(data: LoginPayload) {
  return await axiosInstance.post<LoginResponse>("/auth/login", data);
}

async function getCurrentUser() {
  return await axiosInstance.get<GetCurrentUser>("/auth/current-user");
}

async function logout() {
  return await axiosInstance.post("/auth/logout");
}

const authService = {
  register,
  login,
  getCurrentUser,
  logout,
};

export default authService;

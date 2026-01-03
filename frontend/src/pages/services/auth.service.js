import { apiRequest } from "./api";

export const loginUser = (data) => {
  return apiRequest("/auth/login", "POST", data);
};

export const registerUser = (data) => {
  return apiRequest("/auth/register", "POST", data);
};

export const verifyEmail = (token) => {
  return apiRequest(`/auth/verify/${token}`, "GET");
};

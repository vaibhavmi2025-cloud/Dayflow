import { apiRequest } from "./api";

export const getMyPayroll = () => {
  return apiRequest("/payroll/my", "GET");
};

export const getAllPayrolls = () => {
  return apiRequest("/payroll/all", "GET");
};

export const updatePayroll = (id, data) => {
  return apiRequest(`/payroll/update/${id}`, "PUT", data);
};

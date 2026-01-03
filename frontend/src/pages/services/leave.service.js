import { apiRequest } from "./api";

export const applyLeave = (data) => {
  return apiRequest("/leave/apply", "POST", data);
};

export const getMyLeaves = () => {
  return apiRequest("/leave/my", "GET");
};

export const approveLeave = (id) => {
  return apiRequest(`/leave/approve/${id}`, "PUT");
};

export const rejectLeave = (id) => {
  return apiRequest(`/leave/reject/${id}`, "PUT");
};

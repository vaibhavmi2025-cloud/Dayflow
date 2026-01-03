import { apiRequest } from "./api";

export const checkIn = () => {
  return apiRequest("/attendance/checkin", "POST");
};

export const checkOut = () => {
  return apiRequest("/attendance/checkout", "POST");
};

export const getDailyAttendance = () => {
  return apiRequest("/attendance/daily", "GET");
};

export const getWeeklyAttendance = () => {
  return apiRequest("/attendance/weekly", "GET");
};

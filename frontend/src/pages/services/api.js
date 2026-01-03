import { API_BASE_URL } from "../utils/constants";

export const apiRequest = async (url, method = "GET", data = null) => {
  const token = localStorage.getItem("token");

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${url}`, options);
  return response.json();
};

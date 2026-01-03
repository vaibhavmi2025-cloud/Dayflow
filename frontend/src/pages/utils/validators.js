export const isEmailValid = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isPasswordStrong = (password) => {
  return password.length >= 6;
};

export const isEmpty = (value) => {
  return value === null || value === undefined || value.trim() === "";
};

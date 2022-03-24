export const getToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};

export const logout = () => {
  localStorage.removeItem("authToken");
  return true;
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    const currentUser = JSON.parse(user);
    return currentUser;
  }
  return null;
};

export const setuser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

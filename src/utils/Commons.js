// return the user data from the session storage
export const getUser = () => {
  return sessionStorage.getItem("user");
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const getRole = () => {
  return sessionStorage.getItem("role") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("role");
};

// set the token and user from the session storage
export const setUserSession = (token, user, role) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", user);
  sessionStorage.setItem("role", role);
};

export const setUserRole = (role) => {
  sessionStorage.setItem("role", role);
};

export const isUser = () => {
  return sessionStorage.getItem("role") === "USER" || null;
};

export const isSubscriber = () => {
  return sessionStorage.getItem("role") === "SUBSCRIBER" || null;
};

export const isAdmin = () => {
  return sessionStorage.getItem("role") === "ADMIN" || null;
};

// return the user data from the session storage
export const getUser = () => {
  return sessionStorage.getItem("user");
};

// return the ticket from the session storage
export const getTicket = () => {
  return sessionStorage.getItem("ticket") || null;
};

// remove the ticket and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("ticket");
  sessionStorage.removeItem("user");
};

// set the ticket and user from the session storage
export const setUserSession = (ticket, user) => {
  sessionStorage.setItem("ticket", ticket);
  sessionStorage.setItem("user", user);
};

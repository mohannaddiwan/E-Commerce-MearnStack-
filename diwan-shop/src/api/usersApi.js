const apiUrl = "http://localhost:5000";

const createUser = (data) => {
  fetch(`${apiUrl}/api/auth/register`, {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      fname: data.fname,
      email: data.email,
      lname: data.lname,
      password: data.password,
    }),
  });
};
const usersApi = { createUser };

export default usersApi;

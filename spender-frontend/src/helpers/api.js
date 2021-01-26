import axios from "axios";
const backendURL = "http://localhost:5000";

export function SaveNewExpense(expense, id) {
  axios.put(`${backendURL}/api/users/${id}/expenses`, expense);
  console.log(
    `We're sending ${JSON.stringify(
      expense
    )} as a PUT request at ${backendURL}/api/users/${id}/expenses`
  );
}

export const getExpensesById = async (url) => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
};

<<<<<<< HEAD
export const getExpensesByDate = async (url) => {
  const response = await axios.get(url);
  console.log(response);
  const data = response.data;
  return data;
};

//users api
export function UpdateSettings(settings, id) {
  axios.put(`${backendURL}/api/users/${id}`, settings);
  console.log(
    `We're sending ${JSON.stringify(
      settings
    )} as a PUT request at ${backendURL}/api/user/:id`
  );
}

// export const getDisplayName = async (id) => {
//   const response = await axios.get(`${backendURL}/api/users/${id}`);
//   const data = response.data;
//   let displayName = JSON.stringify(data.displayName);
//   console.log(`Data: ${displayName}`);
//   return displayName;
// };
=======
export const getUserById = async (url) => {
  const response = await axios.get(url)
  const data = response.data
  return data
}
>>>>>>> d25ca2fed22eff5a661c69f98e43813efe2e4008

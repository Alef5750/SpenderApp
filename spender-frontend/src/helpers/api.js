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

export function UpdateSettings(settings, id) {
  axios.put(`${backendURL}/api/users/${id}`, settings);
  console.log(
    `We're sending ${JSON.stringify(
      settings
    )} as a PUT request at ${backendURL}/api/user/:id`
  );
}

export const getExpensesById = async (url) => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
};

export const getExpensesByDate = async (url) => {
  const response = await axios.get(url);
  console.log(response);
  const data = response.data;
  return data;
};

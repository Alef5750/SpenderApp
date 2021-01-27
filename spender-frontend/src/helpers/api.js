import axios from "axios";
const backendURL = "https://spender-app-itc.herokuapp.com";

export function SaveNewExpense(expense, id) {
  axios.put(`${backendURL}/api/users/${id}/expenses`, expense, { withCredentials: true });
}

export const getExpensesById = async (url) => {
  const response = await axios.get(url, { withCredentials: true });
  const data = response.data;
  return data;
};

export const getExpensesByDate = async (url) => {
  const response = await axios.get(url, { withCredentials: true });
  const data = response.data;
  return data;
};

//users api
export function UpdateSettings(settings, id) {
  axios.put(`${backendURL}/api/users/${id}`, settings, { withCredentials: true });
}

export const getUserById = async (id) => {
  const response = await axios.get(`${backendURL}/api/users/${id}`, { withCredentials: true });
  const data = JSON.stringify(response.data);
  return data;
};

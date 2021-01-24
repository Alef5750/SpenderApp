import axios from "axios";
const backendURL = "http://localhost:5000";

export function SaveNewExpense() {
  axios.put();
}

export function UpdateSettings(settings) {
  axios.put(`${backendURL}/api/users/6006bd6fc74a2f0cd474e40c`, settings);
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

// export const getExpensesByDate = async (url) => {
// const response = await axios.get(url)
// console.log(response)
// const data = response.data
// return data
// }

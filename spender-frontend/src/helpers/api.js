import axios from "axios";

export function SaveNewExpense() {
  axios.put();
}

export function UpdateSettings() {
  axios.put();
}

export const getExpensesById = async (url) => {
  const response = await axios.get(url)
  const data = response.data
  return data
}

// export const getExpensesByDate = async (url) => {
  // const response = await axios.get(url)
  // console.log(response)
  // const data = response.data
  // return data
// }
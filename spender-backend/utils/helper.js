const isEmpty = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}

const insertExpense = (newExpense, userExpenses) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;

  // if the year doesn't exist in the expenses report
  if (!userExpenses[currentYear]) {
    userExpenses = {
      ...userExpenses,
      [currentYear]: {
        [currentMonth]: [newExpense]
      }
    }
    return userExpenses
  }

  // if the month doesn't exist in the expenses report
  if (!userExpenses[currentYear][currentMonth]) {
    userExpenses[currentYear] = {
      ...userExpenses[currentYear],
      [currentMonth]: [newExpense]
    }
    return userExpenses
  }

  // new expense to existing year and month
  const currentMonthExpenses = userExpenses[currentYear][currentMonth]
  const newMonthExpenses = [...currentMonthExpenses, newExpense]

  userExpenses[currentYear][currentMonth] = newMonthExpenses;
  return userExpenses;
}
module.exports = { isEmpty, insertExpense }
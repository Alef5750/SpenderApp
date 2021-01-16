const isEmpty = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}

const insertExpense = (newExpense, userExpenses) => {
  const years = Object.keys(userExpenses);
  const lastYear = years[years.length - 1];
  const months = Object.keys(userExpenses[lastYear])
  const lastMonth = months[months.length - 1];

  const currentMonthExpenses = userExpenses[lastYear][lastMonth]
  const newMonthExpenses = [...currentMonthExpenses, newExpense]

  userExpenses[lastYear][lastMonth] = newMonthExpenses;

  return userExpenses;
}
module.exports = { isEmpty, insertExpense }
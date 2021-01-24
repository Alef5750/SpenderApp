const isEmpty = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}

const authRequest = (user, id) => {
  console.log(user)
  return true //for testing
  // if (user && user._id === id) return true;
  // return false;
}

const createDateByFormat = (day, month, year) => {
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  return `${month}/${day}/${year}`
}

const insertExpense = (newExpense, userExpenses) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

  const expenseDate = createDateByFormat(currentDay, currentMonth, currentYear);
  newExpense.date = expenseDate;

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

/*
HOW A SHOULD QUERY LOOK LIKE?
http://localhost:5000/api/users/:id/expenses?date=2020/10-3&date=2020/7-3
[{
  2020:
    {
      10: [],
      11: []
    },
  2021:
    {1: []}
  },
  {
  2020:
    {
      7: [],
      8: [],
      9: []
    }
}]
*/
const getExpensesByQuery = (expenses, query) => {
  if (!Array.isArray(query.date)) {
    // only one date requested 
    const dates = query.date.split('-')
    let queryYear = dates[0].split('/')[0] //2020
    let queryMonth = dates[0].split('/')[1] //10
    const numOfMonths = dates[1] //3

    let expensesByDate = {};
    for (let i = 0; i < numOfMonths; i++) {
      if (queryMonth === 0) {
        queryMonth = 12;
        queryYear--;
      }
      if (!expensesByDate[queryYear]) expensesByDate = { ...expensesByDate, [queryYear]: {} };
      if (!expensesByDate[queryYear][queryMonth]) expensesByDate[queryYear] = { ...expensesByDate[queryYear], [queryMonth]: [] };

      if (expenses[queryYear] && expenses[queryYear][queryMonth])
        expensesByDate[queryYear][queryMonth] = [...expenses[queryYear][queryMonth]]

      queryMonth--;
    }
    return expensesByDate;
  } else {
    // two dates requested
    let dates = query.date[0].split('-') //{date:[2020/10-3, 2020/7-3]}
    let queryYear = dates[0].split('/')[0] //2020
    let queryMonth = dates[0].split('/')[1] //10
    let numOfMonths = dates[1] //3
    let expensesByDateCurrent = {};
    for (let i = 0; i < numOfMonths; i++) {
      if (queryMonth === 0) {
        queryMonth = 12;
        queryYear--;
      }
      if (!expensesByDateCurrent[queryYear]) expensesByDateCurrent = { ...expensesByDateCurrent, [queryYear]: {} };
      if (!expensesByDateCurrent[queryYear][queryMonth]) expensesByDateCurrent[queryYear] = { ...expensesByDateCurrent[queryYear], [queryMonth]: [] };

      if (expenses[queryYear] && expenses[queryYear][queryMonth])
        expensesByDateCurrent[queryYear][queryMonth] = [...expenses[queryYear][queryMonth]]

      queryMonth--;
    }

    dates = query.date[1].split('-') //{date:[2020/10-3, 2020/7-3]}
    queryYear = dates[0].split('/')[0] //2020
    queryMonth = dates[0].split('/')[1] //10
    numOfMonths = dates[1] //3
    let expensesByDatePast = {};
    for (let i = 0; i < numOfMonths; i++) {
      if (queryMonth === 0) {
        queryMonth = 12;
        queryYear--;
      }
      if (!expensesByDatePast[queryYear]) expensesByDatePast = { ...expensesByDatePast, [queryYear]: {} };
      if (!expensesByDatePast[queryYear][queryMonth]) expensesByDatePast[queryYear] = { ...expensesByDatePast[queryYear], [queryMonth]: [] };

      if (expenses[queryYear] && expenses[queryYear][queryMonth])
        expensesByDatePast[queryYear][queryMonth] = [...expenses[queryYear][queryMonth]]

      queryMonth--;
    }

    return [expensesByDateCurrent, expensesByDatePast];
  }
}
module.exports = { isEmpty, authRequest, insertExpense, getExpensesByQuery }
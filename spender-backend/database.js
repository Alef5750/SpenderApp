/*
Data Schemas

user {
  _id: ObjectId,
  firstName: String,
  lastName: String,
  monthlyIncome: Number,
  monthlyGoal: Number
  expenses: [{expense}, {expense}, {expense}]
}

expenses {
  _id: ObjectId,
  userId: ObjectId,
  expenses: [{expense}, {expense}, {expense}]
}

expense {
  _id: ObjectId
  date: Date,
  title: String,
  desc: String,
  category: String
  amount: Number
}
*/
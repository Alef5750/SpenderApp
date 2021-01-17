const express = require('express')
const router = express.Router()

const { getUsers, addNewUser, getUserById, updateUserById, getExpensesById, addNewExpenseById } = require('../controllers/usersController')

router.get('/', getUsers);

router.post('/', addNewUser);

router.get('/:id', getUserById);

router.put('/:id', updateUserById)

router.get('/:id/expenses', getExpensesById);

router.put('/:id/expenses', addNewExpenseById);

module.exports = router;
const express = require('express')
const router = express.Router()

const { getUsers, addNewUser, getUserById, updateUserById } = require('../controllers/usersController')

router.get('/', getUsers);

router.post('/', addNewUser);

router.get('/:id', getUserById);

router.put('/:id', updateUserById)

module.exports = router;
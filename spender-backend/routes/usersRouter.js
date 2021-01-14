const express = require('express')
const router = express.Router()

router.get('/', getUsers);

router.post('/', addNewUser);

router.get('/:id', getUserById);

router.put('/:id', updateUserById)

module.exports = router;
const express = require('express')
const router = express.Router()

router.get('/:id', getExpensesById);

router.post('/:id', addNewExpensesById);

module.exports = router;
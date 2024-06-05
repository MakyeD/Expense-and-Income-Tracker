//Sets addIncome const

const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router()

//Sets route for post method, then calls income script?
router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
module.exports = router
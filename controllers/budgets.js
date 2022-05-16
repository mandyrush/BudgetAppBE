let db = require('../db/db');

const getBudgets = (req, res) => {
    console.log('Get all budgets route.');

    let sql = 'SELECT budgets.id, budgets.title, budgets.amount, budgets.payment_day, pm.name as payment_method, pc.name as payment_category FROM budgets INNER JOIN payment_categories pc ON pc.id = budgets.payment_category_id INNER JOIN payment_methods pm ON pm.id=budgets.payment_method_id';

    db.query(sql, (error, results) => {
        if (error) {
            console.log('Failed to return budgets.');
            res.sendStatus(500);
        } else {
            console.log('Results: ', results);
            res.json(results);
        }
    })
}

module.exports = {
    getBudgets
}
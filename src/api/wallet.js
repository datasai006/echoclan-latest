const express = require("express");
const passport = require("passport");
const mysql = require('mysql');

const router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecoclan-latest'
});



router.post('/wallet-updated', (req, res) => {
    const { user_id, amount_in, amount_out, amount_from } = req.body;

    // validate input
    if (!user_id || (!amount_in && !amount_out)) {
        res.status(400).send('Invalid input');
        return;
    }

    // set default balance as amount_in

    // get user name
    connection.query(
        'SELECT name FROM users WHERE id = ?',
        [user_id],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Internal server error');
                return;
            }

            const name = results[0].name;

            // insert transaction and update balance
            connection.query(
                'INSERT INTO tbl_Wallet (user_id, amount_in, amount_out, amount_from, amount_to) VALUES (?, ?, ?, ?, ?) ',
                [user_id, amount_in || null, amount_out || null, amount_from || null, name],
                (error, results) => {
                    if (error) {
                        console.error(error);
                        res.status(500).send('Internal server error');
                        return;
                    }

                    res.status(200).json({ message: `payment  successfully!` });
                }
            );
        }
    );
}
);



router.get('/balance', (req, res) => {
    const userId = req.body.user_id;

    
    // execute SQL query to get balance
    connection.query(
        'SELECT SUM(amount_in) - SUM(amount_out) AS balance FROM tbl_Wallet WHERE user_id = ?',
        [userId],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Internal server error');
                return;
            }

            const balance = results[0].balance || 0;
            res.status(200).json({ balance: balance });
        }
    );
});






// router.post('/wallet', (req, res) => {
//     const { user_id, amount_in, amount_out } = req.body;

//     const insertQuery = `INSERT INTO tbl_Wallet (user_id, amount_to, amount_in, amount_out)
//     SELECT ${user_id}, name, ${amount_in}, ${amount_out} FROM users WHERE id = ${user_id};`;

//     connection.query(insertQuery, (error, result) => {
//         if (error) {
//             console.log('Error inserting transaction details:', error);
//             res.status(500).send('Error inserting transaction details');
//         } else {
//             console.log('Transaction details inserted successfully!');

//             const selectQuery = `SELECT name AS amount_to FROM users WHERE id = ${user_id}`;

//             connection.query(selectQuery, (error, result) => {
//                 if (error) {
//                     console.log('Error selecting user details:', error);
//                     res.status(500).send('Error selecting user details');
//                 } else {
//                     console.log('User details selected successfully!');
//                     const user = result[0];
//                     res.status(200).json({ user });
//                 }
//             });
//         }
//     });
// });


// router.post('/wallet-final', (req, res) => {
//     const { user_id, amount_in, amount_out, amount_from, amount_to } = req.body;

//     // validate input
//     if (!user_id || !(amount_in || amount_out || amount_from || amount_to)) {
//         res.status(400).send('Invalid input');
//         return;
//     }

//     // calculate balance
//     connection.query(
//         'SELECT SUM(amount_in) - SUM(amount_out)  AS balance FROM tbl_wallet WHERE user_id = ?',
//         [user_id],
//         (error, results) => {
//             if (error) {
//                 console.error(error);
//                 res.status(500).send('Internal server error');
//                 return;
//             }

//             const balance = results[0].balance || 0;

//             // insert transaction
//             connection.query(
//                 'INSERT INTO tbl_wallet (user_id, amount_in, amount_out, amount_from, amount_to,balance) VALUES (?, ?, ?, ?, ?,?)',
//                 [user_id, amount_in || 0, amount_out || 0, amount_from || 0, amount_to || 0,balance|| 0],
//                 (error, results) => {
//                     if (error) {
//                         console.error(error);
//                         res.status(500).send('Internal server error');
//                         return;
//                     }

//                     res.status(200).json({ balance: balance + amount_in - amount_out  });
//                 }
//             );
//         }
//     );
// });



// router.post('/wallet-final', (req, res) => {
//     const { user_id, amount_in, amount_out, amount_from, amount_to } = req.body;



//     // validate input
//     if (!user_id || (!amount_in && !amount_out)) {
//         res.status(400).send('Invalid input');
//         return;
//     }

//     // calculate balance
//     connection.query(
//         'SELECT SUM(amount_in) - SUM(amount_out) AS balance FROM tbl_Wallet WHERE user_id = "?"',
//         (error, results) => {
//             if (error) {
//                 console.error(error);
//                 res.status(500).send('Internal server error');
//                 return;
//             }

//             const balance = results[0].balance || 0;
//             // do something with the balance



//             // insert transaction
//             connection.query(
//                 'UPDATE tbl_Wallet SET balance = COALESCE((SELECT SUM(amount_in) FROM tbl_Wallet WHERE user_id = ?), 0) - COALESCE((SELECT SUM(amount_out) FROM tbl_Wallet WHERE user_id = ?), 0) WHERE user_id = ?',
//                 [user_id, user_id, user_id],
//                 (error, results) => {
//                     if (error) {
//                         console.error(error);
//                         res.status(500).send('Internal server error');
//                         return;
//                     }

//                     // insert transaction
//                     connection.query(
//                         'INSERT INTO tbl_Wallet (user_id, amount_in, amount_out, amount_from, amount_to, balance) VALUES (?, ?, ?, ?, ?, ?)',
//                         [user_id, amount_in || null, amount_out || null, amount_from || null, amount_to || null, balance],
//                         (error, results) => {
//                             if (error) {
//                                 console.error(error);
//                                 res.status(500).send('Internal server error');
//                                 return;
//                             }

//                             res.status(200).json({ balance: balance });
//                         }
//                     );
//                 }
//             );
//         }
//     );
// });




// router.post('/wallet-updated', (req, res) => {
//     const { user_id, amount_in, amount_out, amount_from } = req.body;

//     // validate input
//     if (!user_id || (!amount_in && !amount_out)) {
//         res.status(400).send('Invalid input');
//         return;
//     }

//     // calculate balance
//     connection.query(
//         'SELECT SUM(amount_in) - SUM(amount_out) AS balance FROM tbl_Wallet WHERE user_id = ?',
//         [user_id],
//         (error, results) => {
//             if (error) {
//                 console.error(error);
//                 res.status(500).send('Internal server error');
//                 return;
//             }

//             const balance = results[0].balance || 0;
//             // do something with the balance

//             // get user name
//             connection.query(
//                 'SELECT name FROM users WHERE id = ?',
//                 [user_id],
//                 (error, results) => {
//                     if (error) {
//                         console.error(error);
//                         res.status(500).send('Internal server error');
//                         return;
//                     }

//                     const name = results[0].name;

//                     // insert transaction
//                     connection.query(
//                         'INSERT INTO tbl_Wallet (user_id, amount_in, amount_out, amount_from, amount_to, balance) VALUES (?, ?, ?, ?, ?, ?)',
//                         [user_id, amount_in || null, amount_out || null, amount_from || null, name, balance],
//                         (error, results) => {
//                             if (error) {
//                                 console.error(error);
//                                 res.status(500).send('Internal server error');
//                                 return;
//                             }

//                             res.status(200).json({ balance: balance });
//                         }
//                     );
//                 }
//             );
//         }
//     );
// });




// router.post('/wallet-updated', (req, res) => {
//     const { user_id, amount_in, amount_out, amount_from } = req.body;

//     // validate input
//     if (!user_id || (!amount_in && !amount_out)) {
//         res.status(400).send('Invalid input');
//         return;
//     }

//     // set default balance as amount_in
//     let balance = amount_in || 0;

//     // calculate balance
//     connection.query(
//         'SELECT SUM(amount_in) - SUM(amount_out) AS balance FROM tbl_Wallet WHERE user_id = ?',
//         [user_id],
//         (error, results) => {
//             if (error) {
//                 console.error(error);
//                 res.status(500).send('Internal server error');
//                 return;
//             }

//             balance = results[0].balance || balance;

//             // get user name
//             connection.query(
//                 'SELECT name FROM users WHERE id = ?',
//                 [user_id],
//                 (error, results) => {
//                     if (error) {
//                         console.error(error);
//                         res.status(500).send('Internal server error');
//                         return;
//                     }

//                     const name = results[0].name;

//                     // insert transaction and update balance
//                     connection.query(
//                         'INSERT INTO tbl_Wallet (user_id, amount_in, amount_out, amount_from, amount_to, balance) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE balance = ?',
//                         [user_id, amount_in || null, amount_out || null, amount_from || null, name, balance, balance],
//                         (error, results) => {
//                             if (error) {
//                                 console.error(error);
//                                 res.status(500).send('Internal server error');
//                                 return;
//                             }

//                             res.status(200).json({ balance: balance });
//                         }
//                     );
//                 }
//             );
//         }
//     );
// });





// router.get('/total-earnings/:user_id', (req, res) => {
//     const user_id = req.params.user_id;
//     const query = `SELECT SUM(total_amount) as total_earnings FROM tbl_orders WHERE user_id = ${user_id}`;

//     connection.query(query, (err, result) => {
//       if (err) throw err;

//       const total_earnings = result[0].total_earnings;

//       const updateQuery = `UPDATE tbl_wallet SET total_earnings = ${total_earnings} WHERE user_id = ${user_id}`;
//       connection.query(updateQuery, (err, result) => {
//         if (err) throw err;

//         res.json({ total_earnings });
//       });
//     });
//   });

















module.exports = router;
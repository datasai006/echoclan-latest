const express = require("express");
const passport = require("passport");
const mysql = require('mysql');

const async = require("async");

const router = express.Router();



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecoclan-latest'
});



router.post('/orders', (req, res) => {
    const { user_id, items } = req.body;

    // Calculate the total price of the order
    let total_amount = 0;
    let total_items = 0;
    for (const item of items) {
        connection.query('SELECT * FROM tbl_products WHERE id = ?', item.product_id, (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    throw err;
                });
            }
            item.price = result[0].price;
            const amount = item.quantity * item.price;
            total_amount += amount;
            total_items += parseInt(item.quantity);
            if (items.filter(item => item.price === undefined).length === 0) {
                // All items have their price set, insert the order and order details
                const order = {
                    user_id: user_id,
                    order_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    total_items,
                    total_amount,
                };

                connection.beginTransaction((err) => {
                    if (err) {
                        throw err;
                    }

                    connection.query('INSERT INTO tbl_orders SET ?', order, (err, result) => {
                        if (err) {
                            return connection.rollback(() => {
                                throw err;
                            });
                        }

                        const order_id = result.insertId;
                        const orderDetails = items.map(item => [order_id, item.product_id, item.quantity, item.quantity * item.price]);

                        // Insert the order details
                        connection.query('INSERT INTO tbl_order_details (order_id, product_id, quantity,  amount) VALUES ?', [orderDetails], (err, result) => {
                            if (err) {
                                return connection.rollback(() => {
                                    throw err;
                                });
                            }

                            connection.commit((err) => {
                                if (err) {
                                    return connection.rollback(() => {
                                        throw err;
                                    });
                                }

                                res.status(201).json({ status: 'success', message: 'Order created successfully!' });
                            });
                        });
                    });
                });
            }
        });
    }
});





















// router.post('/orders', (req, res) => {

//     const { product_id, quantity } = req.body;


//     connection.query('SELECT * FROM tbl_products WHERE id = ?', [product_id], (err, result) => {
//         if (err || result.length === 0) {
//             return res.status(400).json({ message: 'Invalid product_id' });
//         }

//         const product = result[0];
//         const total_amount = product.price * quantity;
//         const total_items = quantity;


//         const orderData = {
//             user_id: req.body.user_id,
//             total_amount,
//             total_items

//         };

//         connection.query('INSERT INTO tbl_orders SET ?', orderData, (err, result) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send('Error creating order!');
//             } else {
//                 console.log(`Order ${result.insertId} created successfully!`);

//                 const amount = product.price * quantity;

//                 const orderDetailsData = {
//                     order_id: result.insertId,
//                     product_id: req.body.product_id,
//                     quantity: req.body.quantity,
//                     amount

//                 };

//                 connection.query('INSERT INTO tbl_order_details SET ?', orderDetailsData, (err, result) => {
//                     if (err) {
//                         console.error(err);
//                         res.status(500).send('Error creating order detail!');
//                     } else {

//                         console.log(`Order detail ${result.insertId} created successfully!`);
//                         // res.status(200).send(`order_id: ${result.insertId} created successfully! `);
//                         res.status(200).send({ order_details_id: `${result.insertId} created successfully! ` });
//                     }
//                 });
//             }
//         });
//     });
// });



//   router.post('/orders-try',(req, res) => {
//     try {
//         const { product_id, quantity, user_id } = req.body;

//         const [product] = connection.query('SELECT * FROM tbl_products WHERE id = ?', [product_id]);

//         if (!product.length) {
//             return res.status(400).json({ message: 'Invalid product_id' });
//         }

//         const total_amount = product[i].price * quantity;
//         const total_items = quantity;

//         const orderData = {
//             user_id,
//             total_amount,
//             total_items
//         };

//         const [orderResult] =  connection.query('INSERT INTO tbl_orders SET ?', orderData);

//         const amount = product[i].price * quantity;

//         const orderDetailsData = {
//             order_id: orderResult.insertId,
//             product_id,
//             quantity,
//             amount
//         };

//         const [orderDetailsResult] =  connection.query('INSERT INTO tbl_order_details SET ?', orderDetailsData);

//         console.log(`Order ${orderResult.insertId} created successfully!`);
//         console.log(`Order detail ${orderDetailsResult.insertId} created successfully!`);

//         res.status(200).json({ order_id: `${orderResult.insertId} created successfully!` });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error creating order or order detail!');
//     }
// });


// router.post('/order', (req, res) => {
//     const { user_id, items } = req.body;

//     // Calculate the total price of the order
//     let total_amount=0;
//     let total_items=0;
//     for (const item of items) {

//         console.log(`quantity ${item.quantity} and price ${item.price}`);
//       total_amount += (item.quantity * item.price);
//       total_items = total_items + item.quantity;
//       console.log(`total items ${total_items}`);
//     }
//   console.log( ` total amount: ${total_amount}`)
//     // Insert the order
//     const order = {
//       user_id: user_id,
//       order_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
//       total_items,
//       total_amount,
//     };

//     connection.beginTransaction((err) => {
//       if (err) {
//         throw err;
//       }

//       connection.query('INSERT INTO tbl_orders SET ?', order, (err, result) => {
//         if (err) {
//           return connection.rollback(() => {
//             throw err;
//           });
//         }

//         const order_id = result.insertId;
//         const orderDetails = [];



//         for (const item of items) {
//           orderDetails.push([order_id, item.product_id, item.quantity]);
//         }

//         connection.query('INSERT INTO tbl_order_details (order_id, product_id, quantity) VALUES ?', [orderDetails], (err, result) => {
//           if (err) {
//             return connection.rollback(() => {
//               throw err;
//             });
//           }

//           connection.commit((err) => {
//             if (err) {
//               return connection.rollback(() => {
//                 throw err;
//               });
//             }

//             res.status(201).send('Order created successfully!');
//           });
//         });
//       });
//     });
//   });





//   router.post('/order', (req, res) => {
//     const { user_id, items } = req.body;

//     // Calculate the total price of the order
//     let total_amount=0;
//     let total_items=0;
//     for (const item of items) {
//       total_amount += (item.quantity * item.price);
//       total_items = total_items + item.quantity;
//     }

//     // Insert the order
//     const order = {
//       user_id: user_id,
//       order_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
//       total_items,
//       total_amount,
//     };

//     connection.beginTransaction((err) => {
//       if (err) {
//         throw err;
//       }

//       connection.query('INSERT INTO tbl_orders SET ?', order, (err, result) => {
//         if (err) {
//           return connection.rollback(() => {
//             throw err;
//           });
//         }

//         const order_id = result.insertId;
//         const orderDetails = [];

//         for (const item of items) {
//           orderDetails.push([order_id, item.product_id, item.quantity]);
//         }

//         // Insert the order details
//         let query = 'INSERT INTO tbl_order_details (order_id, product_id, quantity) VALUES';
//         for (let i = 0; i < orderDetails.length; i++) {
//           query += `(${orderDetails[i][0]}, ${orderDetails[i][1]}, ${orderDetails[i][2]})`;
//           if (i !== orderDetails.length - 1) {
//             query += ',';
//           }
//         }

//         connection.query(query, (err, result) => {
//           if (err) {
//             return connection.rollback(() => {
//               throw err;
//             });
//           }

//           connection.commit((err) => {
//             if (err) {
//               return connection.rollback(() => {
//                 throw err;
//               });
//             }

//             res.status(201).send('Order created successfully!');
//           });
//         });
//       });
//     });
//   });




// router.post('/order-uptodate', (req, res) => {
//     const { user_id, items } = req.body;

//     // Calculate the total price of the order
//     let total_amount = 0;
//     let total_items = 0;
//     for (const item of items) {
//         connection.query('SELECT * FROM tbl_products WHERE id = ?', item.product_id, (err, result) => {
//             if (err) {
//                 return connection.rollback(() => {
//                     throw err;
//                 });
//             }
//             item.price = result[0].price;
//             total_amount += (item.quantity * item.price);
//             total_items += parseInt(item.quantity);
//             if (items.filter(item => item.price === undefined).length === 0) {
//                 // All items have their price set, insert the order and order details
//                 const order = {
//                     user_id: user_id,
//                     order_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
//                     total_items,
//                     total_amount,
//                 };

//                 connection.beginTransaction((err) => {
//                     if (err) {
//                         throw err;
//                     }

//                     connection.query('INSERT INTO tbl_orders SET ?', order, (err, result) => {
//                         if (err) {
//                             return connection.rollback(() => {
//                                 throw err;
//                             });
//                         }

//                         const order_id = result.insertId;
//                         const orderDetails = items.map(item => [order_id, item.product_id, item.quantity,amount]);
//                         const amount=item.price*item.quantity;


//                         // Insert the order details
//                         connection.query('INSERT INTO tbl_order_details (order_id, product_id, quantity,amount) VALUES ?', [orderDetails], (err, result) => {
//                             if (err) {
//                                 return connection.rollback(() => {
//                                     throw err;
//                                 });
//                             }

//                             connection.commit((err) => {
//                                 if (err) {
//                                     return connection.rollback(() => {
//                                         throw err;
//                                     });
//                                 }

//                                 res.status(201).json({ status: 'success', message: 'Order created successfully!' });
//                             });
//                         });
//                     });
//                 });
//             }
//         });
//     }
// });





// router.post('/order-uptodate-finaltry', (req, res) => {
//     const { user_id, items } = req.body;

//     // Calculate the total price of the order
//     let total_amount = 0;
//     let total_items = 0;
//     for (const item of items) {
//         connection.query('SELECT * FROM tbl_products WHERE id = ?', item.product_id, (err, result) => {
//             if (err) {
//                 return connection.rollback(() => {
//                     throw err;
//                 });
//             }
//             item.price = result[0].price;
//             total_amount += (item.quantity * item.price);
//             total_items += parseInt(item.quantity);
//             if (items.filter(item => item.price === undefined).length === 0) {
//                 // All items have their price set, insert the order and order details
//                 const order = {
//                     user_id: user_id,
//                     order_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
//                     total_items,
//                     total_amount,
//                 };

//                 connection.beginTransaction((err) => {
//                     if (err) {
//                         throw err;
//                     }

//                     connection.query('INSERT INTO tbl_orders SET ?', order, (err, result) => {
//                         if (err) {
//                             return connection.rollback(() => {
//                                 throw err;
//                             });
//                         }
                        
//                         const order_id = result.insertId;
//                         const orderDetails = [];

//                         for (const item of items) {
//                             orderDetails.push({
//                                 product_id: item.product_id,
//                                 quantity: item.quantity,
//                             });
//                         }

//                         const row = {
//                             order_id: order_id,
//                             product_id: orderDetails[0].product_id,
//                             product_id: orderDetails[1].product_id,
//                             product_id: orderDetails[2].product_id,
//                             quantity: orderDetails[0].quantity,
//                             quantity: orderDetails[1].quantity,
//                             quantity: orderDetails[2].quantity,
//                         };

//                         connection.query('INSERT INTO tbl_order_details SET ?', row, (err, result) => {
//                             if (err) {
//                                 return connection.rollback(() => {
//                                     throw err;
//                                 });
//                             }

//                             connection.commit((err) => {
//                                 if (err) {
//                                     return connection.rollback(() => {
//                                         throw err;
//                                     });
//                                 }

//                                 res.status(201).json({ status: 'success', message: 'Order created successfully!' });
//                             });
//                         });
//                     });
//                 });
//             }
//         });
//     }
// });









module.exports = router;
const express = require("express");

const async = require("async");
const mysql = require('mysql2/promise');
const router = express.Router();



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecoclan-latest'
});



// router.post('/add-orders', (req, res) => {
//     const { user_id, product_id, quantity } = req.body;

//     // validate the user_id input
//     connection.query('SELECT * FROM users WHERE id = ?', [user_id], (err, result) => {
//         if (err || result.length === 0) {
//             return res.status(400).json({ message: 'Invalid user_id' });
//         }

//         // validate the product_id input
//         connection.query('SELECT * FROM tbl_products WHERE id = ?', [product_id], (err, result) => {
//             if (err || result.length === 0) {
//                 return res.status(400).json({ message: 'Invalid product_id' });
//             }

//             const product = result[0];
//             const total_amount = product.price * quantity;
//             const total_items = quantity;

//             // insert the order data into the orders table
//             connection.query('INSERT INTO tbl_orders SET ?', {
//                 user_id,
//                 total_amount,
//                 order_date: new Date(),
//                 total_items

//             }, (err, result) => {
//                 if (err) {
//                     return res.status(500).json({ message: 'Unable to create order' });
//                 }

//                 // return the order data to the client
//                 return res.json({
//                     order_id: result.insertId,
//                     user_id,
//                     total_amount,
//                     order_date: new Date(),
//                     total_items
//                 });
//             });

//         });
//     });
// });


router.post('/orders-final', (req, res) => {


    const { user_id } = req.body;
    const items = req.body.items;

    var total_amount = 0;
    var total_items = 0;
    console.log('hrllo');
    console.log(user_id);
    console.log(items.length);
     let insertId = 0;
    for (i = 0; i < items.length; i++) {

        console.log(items[i].product_id)
        console.log(items[i].quantity);
        var product_id = items[i].product_id;
        var quantity = items[i].quantity;
         connection.query('SELECT * FROM tbl_products WHERE id = ?', [product_id], (err, result) => {
            if (err || result.length === 0) {
                // return res.status(401).json({ message: 'Invalid product_id' });
            } else {
                const product = result[0];
                console.log(product);
                var total_amount = total_amount + (quantity * product.price);
                var total_items = total_items + quantity;
            }

        });



        // const total_amount = 1000;
        // const total_items = 10;


        const orderData = {
            user_id: req.body.user_id,
            total_amount,
            total_items

        };

        if (i == 0) {


            connection.query('INSERT INTO tbl_orders SET ?', orderData, (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error creating order!');
                } else {
                    console.log(`Order ${result.insertId} created successfully!`);
                    insertId = result.insertId;
                    console.log(`insert ${insertId} id!`)
                }
            });

        }
        
        console.log(`insert ${insertId} id!`)
        const amount = 100 * quantity;
        const orderDetailsData = {
            order_id: insertId,
            product_id: product_id,
            quantity: quantity,
            amount
        

        };
    
        connection.query('INSERT INTO tbl_order_details SET ?', orderDetailsData, (err, result) => {
            if (err) {
                console.error(err);

            } else {

                console.log(`Order detail ${result.insertId} created successfully!`);
                res.status(201).send(orderDetailsData);
            }
        
        });
    }
});


router.post('/orders-finals', async (req, res) => {
    const { user_id } = req.body;
    const items = req.body.items;
  
    let total_amount = 0;
    let total_items = 0;
  
    for (let i = 0; i < items.length; i++) {
      const { product_id, quantity } = items[i];
  
      try {
        const [product] = await new Promise((resolve, reject) => {
          connection.query('SELECT * FROM tbl_products WHERE id = ?', [product_id], (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
  
        if (!product) {
          return res.status(401).json({ message: 'Invalid product_id' });
        }
        total_amount += quantity * product.price;
        total_items += quantity;
        insertId=0;
  
        const orderData = {
          user_id: req.body.user_id,
          total_amount,
          total_items,
        };
  
        if (i === 0) {
          const [result] = await new Promise((resolve, reject) => {
            connection.query('INSERT INTO tbl_orders SET ?', orderData, (err, result) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            });
          });
          insertId = result.insertId;
        }
  
        const amount = 100 * quantity;
        const orderDetailsData = {
          order_id: insertId,
          product_id: product_id,
          quantity: quantity,
          amount,
        };
  
        const [result] = await new Promise((resolve, reject) => {
          connection.query('INSERT INTO tbl_order_details SET ?', orderDetailsData, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
  
        console.log(`Order detail ${result.insertId} created successfully!`);
        res.status(201).send(orderDetailsData);
      } catch (err) {
        console.error(err);
       
      }
    }
  });
  









// orders updated


router.post('/orders-updated', (req, res) => {
    const products = req.body.product_id;
    const quantities = req.body.quantity;


    const order = {
        user_id: req.body.user_id,

    };

    connection.query('INSERT INTO tbl_orders SET ?', order, (error, results, fields) => {
        if (error) throw error;

        const orderId = results.insertId;

        for (let i = 0; i < products.length; i++) {
            const products = products[i];
            const quantity = quantities[i];


            const orderItem = {
                order_id: orderId,
                product_id: products,
                quantity: quantity
            };

            connection.query('INSERT INTO tbl_order_details SET ?', orderItem, (error, results, fields) => {
                if (error) throw error;
            });
        }

        res.send('Order placed successfully!');
    });
});















// router.post('/orders-finals', (req, res) => {
//     try {
//         const { user_id } = req.body;
//         const items = req.body.items;
//         var total_amount = 0;
//         var total_items = 0;
//         let insertId = 0;
//         for (i = 0; i < items.length; i++) {
//             var product_id = items[i].product_id;
//             var quantity = items[i].quantity;
//             const [product] = connection.query('SELECT * FROM tbl_products WHERE id = ?', [product_id]);
//             if (!product) {
//                 return res.status(401).json({ message: 'Invalid product_id' });
//             }
//             total_amount += quantity * product.price;
//             total_items += quantity;
//             const orderData = {
//                 user_id,
//                 total_amount,
//                 total_items,
//             };
//             if (i === 0) {
//                 const [result] = connection.query('INSERT INTO tbl_orders SET ?', orderData);
//                 insertId = result.insertId;
//             }
//             const orderDetailsData = {
//                 order_id: insertId,
//                 product_id,
//                 quantity,
//             };
//             connection.query('INSERT INTO tbl_order_details SET ?', orderDetailsData);
//         }
//         res.status(201).send({ message: 'Order created successfully!' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error creating order!');
//     }
// });



router.post('/orderfinal', async (req, res) => {
    const { user_id } = req.body;
    const items = req.body.items;
  
    let total_amount = 0;
    let total_items = 0;
  
    try {
      // Insert data into tbl_orders table
      const orderData = {
        user_id,
        total_amount,
        total_items,
      };
  
     const [orderResult] = connection.promise().query('INSERT INTO tbl_orders SET ?', orderData);
      const orderId = orderResult.insertId;
  
      // Insert data into tbl_order_details table
      for (let i = 0; i < items.length; i++) {
        const { product_id, quantity } = items[i];
  
        // Get product details from tbl_products table
        const [productResult] = connection.promise().query('SELECT * FROM tbl_products WHERE id = ?', [
            product_id,
        ]);
        const product = productResult[0];
  
        if (!product) {
          return res.status(401).json({ message: 'Invalid product_id' });
        }
  
        const amount = quantity * product.price;
  
        const orderDetailsData = {
          order_id: orderId,
          product_id,
          quantity,
          amount,
        };
  
        // Insert data into tbl_order_details table
        const [orderDetailsResult] = connection.query(
            'INSERT INTO tbl_order_details SET ?',
            orderDetailsData
        );
  
        console.log(`Order detail ${orderDetailsResult.insertId} created successfully!`);
  
        total_amount += amount;
        total_items += quantity;
      }
  
      // Update total_amount and total_items in tbl_orders table
      connection.promise().query(
            'UPDATE tbl_orders SET total_amount = ?, total_items = ? WHERE id = ?',
            [total_amount, total_items, orderId]
        );
  
      res.status(201).send({ message: 'Order created successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error creating order!' });
    }
  });
  
































// orders trail 1


// const products = [
//     { productId: 1, quantity: 2 },
//     { productId: 2, quantity: 1 },
//     { productId: 3, quantity: 4 }
//   ];

//   let totalPrice = 0;

//   let productIds = products.map(item => item.productId).join(',');

//   let query = `SELECT * FROM tbl_products WHERE id IN (${productIds})`;

//   connection.query(query, (error, results, fields) => {
//     if (error) {
//       console.error(error);
//       return;
//     }

//     let orderQuery = `INSERT INTO tbl_orders (total_price) VALUES (${totalPrice})`;

//     connection.query(orderQuery, (orderError, orderResult, orderFields) => {
//       if (orderError) {
//         console.error(orderError);
//         return;
//       }

//       let orderId = orderResult.insertId;

//       let orderDetailsQuery = 'INSERT INTO order_details (order_id, product_id, quantity, price) VALUES';

//       products.forEach((product, index) => {
//         let item = results.find(item => item.id === product.productId);
//         let itemTotalPrice = item.price * product.quantity;
//         totalPrice += itemTotalPrice;

//         orderDetailsQuery += ` (${orderId}, ${product.productId}, ${product.quantity}, ${item.price})`;

//         if (index < products.length - 1) {
//           orderDetailsQuery += ',';
//         }
//       });

//       connection.query(orderDetailsQuery, (orderDetailsError, orderDetailsResult, orderDetailsFields) => {
//         if (orderDetailsError) {
//           console.error(orderDetailsError);
//           return;
//         }
//         console.log(`Order with ID ${orderId} was created with total price ${totalPrice}`);
//       });
//     });
//   });




// orders total_amount









// router.post('/orders-latest', (req, res) => {


//     const { items } = req.body;


//     connection.query('SELECT * FROM tbl_products WHERE id = ?', [items.product_id], (err, result) => {
//         if (err || result.length === 0) {
//             return res.status(401).json({ message: 'Invalid product_id' });
//         }

//         else {
//             let total_amount = 0;
//             let total_items = 0;

//             for (let i = 0; i < result.length; i++) {
//                 const item = result[i];
//                 total_amount += item.price * item.quantity;
//                 total_items += item.quantity;
//             }


//             const orderData = {
//                 user_id: req.body.user_id,
//                 total_amount,
//                 total_items

//             };


//             connection.query('INSERT INTO tbl_orders SET ?', orderData, (err, result) => {
//                 if (err) {
//                     console.error(err);
//                     res.status(500).send('Error cating order!');
//                 } else {
//                     console.log(`Order ${result.insertId} created successfully!`);

//                     const amount = 100 * items.quantity;
//                     const orderDetailsData = {
//                         order_id: result.insertId,
//                         product_id: req.body.items.product_id,
//                         quantity: req.body.items.quantity,
//                         amount

//                     };

//                     connection.query('INSERT INTO tbl_order_details SET ?', orderDetailsData, (err, result) => {
//                         if (err) {
//                             console.error(err);
//                             res.status(500).send('Error creating order detail!');
//                         } else {

//                             console.log(`Order detail ${result.insertId} created successfully!`);
//                             res.status(201).send(orderDetailsData);
//                         }

//                     });
//                 }
//             });
//         }
//     });
// });


























module.exports = router;
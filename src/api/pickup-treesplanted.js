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


router.get('/products', function(req, res) {
	// specify the columns you want to select

	// build your MySQL query
	const query = `SELECT id,name,product_image,item_type FROM tbl_products`;
  
	// execute the query
	connection.query(query, function(error, results, fields) {
	  if (error) throw error;
  
	  // send the results back to the client
	  res.send(results);
	});
  });


  router.get('/pickups', (req, res) => {
    const user_id = req.body.user_id;

    // retrieve order details
    connection.query(
        `SELECT o.id as order_id, od.product_id, od.quantity ,od.amount
         FROM tbl_orders o 
         JOIN tbl_order_details od ON o.id = od.order_id 
         WHERE o.user_id = ?`,
        [user_id],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Internal server error');
                return;
            }

            res.status(200).json(results);
        }
    );
});



router.get('/trees-planted', (req, res) => {
  const user_id = req.body.user_id;

  // count number of orders placed by the user
  connection.query(
    'SELECT COUNT(*) AS num_orders FROM tbl_orders WHERE user_id = ?',
    [user_id],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal server error');
        return;
      }

      const num_orders = results[0].num_orders || 0;
      const trees_planted_per_order = 1; // assume one tree planted per order

      const total_trees_planted_per_order = num_orders * trees_planted_per_order;

      // count total number of orders
      connection.query(
        'SELECT COUNT(*) AS total_orders FROM tbl_orders',
        (error, results) => {
          if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
            return;
          }

          const total_orders = results[0].total_orders || 0;
          const total_trees_planted = total_orders * trees_planted_per_order;

          res.status(200).json({
            trees_planted_by_you: total_trees_planted_per_order,
            total_trees_planted_so_far: total_trees_planted
          });
        }
      );
    }
  );
});















module.exports = router;

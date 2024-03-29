const express = require("express");
const passport = require("passport");
const mysql = require("mysql");

const router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecoclan-latest", 
});

router.get("/category", function (req, res) {
  // specify the columns you want to select

  // build your MySQL query
  const query = `SELECT id,name,category_image FROM tbl_categories`;

  // execute the query
  connection.query(query, function (error, results, fields) {
    if (error) throw error;

    // send the results back to the client
    res.send(results);
  });
});

router.get("/products/:id", function (req, res) {
  // specify the columns you want to select
  const category_id = req.params.id;
  // build your MySQL query
  const query = `SELECT id,name,product_image,price,unit_type FROM tbl_products WHERE category_id = ${category_id}`;

  // execute the query
  connection.query(query, function (error, results, fields) {
    if (error) throw error;

    // send the results back to the client
    res.send(results);
  });
});

module.exports = router;

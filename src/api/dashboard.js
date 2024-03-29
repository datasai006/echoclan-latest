const express = require("express");
const passport = require("passport");
const mysql = require("mysql2/promise");

const app = express();
const router = express.Router();

router.get("/dashboard-metrics", async (req, res) => {
  const userId = req.body.user_id;

  if (isNaN(userId)) {
    return res.status(400).json({
      message: "Invalid userId parameter",
    });
  }

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "ecoclan-latest",
    });

    const [rows, fields] = await connection.execute(
      `SELECT total_items, total_items * 5 AS energySaved, total_items * 8 AS oilSaved,total_items * 12 AS treesSaved,total_items * 18 AS waterSaved,
      total_items * 5 AS purifiedAir,total_items * 3 AS landFill FROM tbl_orders WHERE user_id = ?`,
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// router.get('/validate', (req, res) => {
//     res.send('Hello World!')
//   })

// router.get('/dashboard', (req, res) => {
//   const { weight, material } = req.body

//    // Calculate energy saved based on weight and material type
//    let energySaved = 2050
//    if (weight < 100) {
//      energySaved = weight * 10
//    } else if (weight <  200) {
//    energySaved = weight * 10
//   } else if (weight < 500) {
//    energySaved = weight * 10
//    }else if (weight < 750) {
//     energySaved = weight * 10
//    }
//    else if (weight <  1000) {
//     energySaved = weight * 10
//    }

//   // Calculate oil saved based on weight and material type
//    let oilSaved = 785
//   if (weight < 100) {
//    oilSaved = weight * 1.5
//   } else if (weight < 200) {
//    oilSaved = weight * 1.5 }
//    else if (weight < 500) {
//    oilSaved = weight * 1.5
//    }
//    else if (weight < 750) {
//     oilSaved = weight * 1.5
//     }
//     else if (weight < 1000) {
//       oilSaved = weight * 1.5
//       }

//   // Calculate trees saved based on weight and material type
//   let treesSaved = 22
//   if (weight === 100) {
//    treesSaved = weight * 0.2
//    } else if (weight < 200) {
//     treesSaved = weight * 0.2
//    } else if (weight < 500) {
//     treesSaved = weight * 0.2
//    }
//    else if (weight < 750) {
//     treesSaved = weight * 0.2
//    }
//    else if (weight < 1000) {
//     treesSaved = weight * 0.2
//    }
//       // Calculate water saved based on weight and material type

//    let waterSaved = 522
//   if (weight === 100) {
//     waterSaved = weight * 24
//    } else if (weight === 200) {
//     waterSaved = weight * 24
//    } else if (weight === 500) {
//     waterSaved = weight * 24
//    }
//    else if (weight === 750) {
//     waterSaved = weight * 24
//    }
//    else if (weight === 1000) {
//     waterSaved = weight * 24
//    }

//        // Calculate air purified saved based on weight and material type

//    let purifiedAir = 250
//   if (weight === 100) {
//     purifiedAir = weight * 15
//    } else if (weight === 200) {
//     purifiedAir = weight * 15
//    } else if (weight === 500) {
//     purifiedAir = weight * 15
//    }
//    else if (weight === 750) {
//     purifiedAir = weight * 15
//    }
//    else if (weight === 1000) {
//     purifiedAir = weight * 15
//    }

//      // Calculate area of land fill saved based on weight and material type

//    let landFill = 1245
//   if (weight === 100) {
//       landFill= weight * 6
//    } else if (weight === 200) {
//     landFill= weight * 6
//    } else if (weight === 500) {
//     landFill= weight * 6
//    }
//    else if (weight === 750) {
//     landFill= weight * 6
//    }
//    else if (weight === 1000) {
//     landFill= weight * 6
//    }

//   // Return the calculated values as a response
//    res.json({
//   energySaved,
//    oilSaved,
//     treesSaved,
//     waterSaved,
//     purifiedAir,
//     landFill
//   });
//   });

// router.get('/savings/:userId', async (req, res) => {
//   const userId = parseInt(req.params.userId);

//   if (isNaN(userId)) {
//     return res.status(400).json({
//       message: 'Invalid userId parameter'
//     });
//   }

//   try {
//     const connection = await mysql.createConnection({
//       host     : 'localhost',
//       user     : 'root',
//       password : '',
//       database : 'ecoclan-latest'
//     });

//     const [rows, fields] = await connection.execute(
//       `SELECT total_items, total_items * 5 AS energySaved, total_items * 8 AS oilSaved,total_items * 12 AS treesSaved,total_items * 18 AS waterSaved,
//       total_items * 5 AS purifiedAir,total_items * 3 AS landFill FROM tbl_orders WHERE user_id = ?`,
//       [userId]
//     );

//     if (rows.length === 0) {
//       return res.status(404).json({
//         message: 'User not found'
//       });
//     }

//     res.json(rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: 'Internal server error'
//     });
//   }
// });

router.get("/dashboard-metrics", async (req, res) => {
  const userId = req.body.user_id;

  if (isNaN(userId)) {
    return res.status(400).json({
      message: "Invalid userId parameter",
    });
  }

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "ecoclan-latest",
    });

    const [rows, fields] = await connection.execute(
      `SELECT total_items, total_items * 5 AS energySaved, total_items * 8 AS oilSaved,total_items * 12 AS treesSaved,total_items * 18 AS waterSaved,
            total_items * 5 AS purifiedAir,total_items * 3 AS landFill FROM tbl_orders WHERE user_id = ?`,
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;

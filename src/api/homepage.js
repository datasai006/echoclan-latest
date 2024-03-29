const express = require("express");
const passport = require("passport");
const mysql = require('mysql');

const router = express.Router();

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'ecoclan-latest'
});


// router.get('/validate', (req, res) => {
//     res.send('Hello World!')
//   })

router.get("/homepage",
    passport.authenticate("jwt", { session: false }), 
    (req, res) => {
    
        res.send({status:200,message:"Hello, Welcome to our Homepage"});
    }
   
  );





  // router.post('/dashboard', (req, res) => {
  //   const { weight, material } = req.body
    
    
    
  //    // Calculate energy saved based on weight and material type
  //    let energySaved = 0
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
  //    let oilSaved = 0
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
  //   let treesSaved = 0
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
    
  //    let waterSaved = 0
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
    
  //    let purifiedAir = 0
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

  //    let landFill = 0
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
    

    router.get('/dashboard-metric', (req, res) => {
      const { weight, material } = req.body
      
      
      
       // Calculate energy saved based on weight and material type
       let energySaved = 2050
       if (weight < 100) {
         energySaved = weight * 10
       } else if (weight <  200) {
       energySaved = weight * 10
      } else if (weight < 500) {
       energySaved = weight * 10
       }else if (weight < 750) {
        energySaved = weight * 10
       }
       else if (weight <  1000) {
        energySaved = weight * 10
       }
  
      
      
      // Calculate oil saved based on weight and material type
       let oilSaved = 785
      if (weight < 100) {
       oilSaved = weight * 1.5
      } else if (weight < 200) {
       oilSaved = weight * 1.5 } 
       else if (weight < 500) {
       oilSaved = weight * 1.5
       }
       else if (weight < 750) {
        oilSaved = weight * 1.5
        }
        else if (weight < 1000) {
          oilSaved = weight * 1.5
          }
      
      
      // Calculate trees saved based on weight and material type
      let treesSaved = 22
      if (weight === 100) {
       treesSaved = weight * 0.2
       } else if (weight < 200) {
        treesSaved = weight * 0.2
       } else if (weight < 500) {
        treesSaved = weight * 0.2
       }
       else if (weight < 750) {
        treesSaved = weight * 0.2
       }
       else if (weight < 1000) {
        treesSaved = weight * 0.2
       }
          // Calculate water saved based on weight and material type
      
       let waterSaved = 522
      if (weight === 100) {
        waterSaved = weight * 24
       } else if (weight === 200) {
        waterSaved = weight * 24
       } else if (weight === 500) {
        waterSaved = weight * 24
       }
       else if (weight === 750) {
        waterSaved = weight * 24
       }
       else if (weight === 1000) {
        waterSaved = weight * 24
       }
  
           // Calculate air purified saved based on weight and material type
      
       let purifiedAir = 250
      if (weight === 100) {
        purifiedAir = weight * 15
       } else if (weight === 200) {
        purifiedAir = weight * 15
       } else if (weight === 500) {
        purifiedAir = weight * 15
       }
       else if (weight === 750) {
        purifiedAir = weight * 15
       }
       else if (weight === 1000) {
        purifiedAir = weight * 15
       }
  
         // Calculate area of land fill saved based on weight and material type
  
       let landFill = 1245
      if (weight === 100) {
          landFill= weight * 6
       } else if (weight === 200) {
        landFill= weight * 6
       } else if (weight === 500) {
        landFill= weight * 6
       }
       else if (weight === 750) {
        landFill= weight * 6
       }
       else if (weight === 1000) {
        landFill= weight * 6
       }
  
  
  
      
      // Return the calculated values as a response
       res.json({
      energySaved,
       oilSaved,
        treesSaved,
        waterSaved,
        purifiedAir,
        landFill
      });
      });
      



module.exports = router;
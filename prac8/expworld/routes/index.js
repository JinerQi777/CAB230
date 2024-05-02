var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/api/city", function (req, res, next) {
//   req.db
//     .from("city")
//     .select("name", "district")
//     .then((rows) => {
//       res.json({ Error: false, Message: "Success", City: rows });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json({ Error: true, Message: "Error in MySQL query" });
//     });
// });

router.get("/api/city", async (req, res, next) => {
  try {
    const rows = await req.db.from("city").select("name", "district")
    res.json({ Error: false, Message: "Success", City: rows });

  } catch (error) {
    res.json({ Error: true, Message: "Error in MySQL query" });
  }
});

// router.get("/api/city/:CountryCode", function (req, res, next) { 
//     req.db 
//       .from("city") 
//       .select("*") 
//       .where("CountryCode", "=", req.params.CountryCode) 
//       .then((rows) => { 
//         res.json({ Error: false, Message: "Success", City: rows }); 
//       }) 
//       .catch((err) => { 
//         console.log(err); 
//         res.json({ Error: true, Message: "Error in MySQL query" }); 
//       }); 
//   }); 

router.get("/api/city/:CountryCode", async (req, res, next)=> {

  const CountryCode=req.params.CountryCode
  try {
    const rows=await req.db.from("city").select("*").where("CountryCode", "=", CountryCode)
    res.json({ Error: false, Message: "Success", City: rows });
    
  } catch (error) {
    res.json({ Error: true, Message: "Error in MySQL query" });
  }   
});


module.exports = router;

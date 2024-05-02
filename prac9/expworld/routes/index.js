var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'The World Database API' });
});

router.get('/api', function (req, res, next) {
  res.render('index', { title: 'Lots of routes available' });
});

router.get("/api/city", function (req, res, next) {
  req.db.from('city').select("name", "district")
    .then((rows) => {
      res.json({ "Error": false, "Message": "Success", "City": rows })
    })
    .catch((err) => {
      console.log(err);
      res.json({ "Error": true, "Message": "Error in MySQL query" })
    })
});

router.get("/api/city/:CountryCode", function (req, res, next) {
  req.db.from('city').select('*').where('CountryCode', '=', req.params.CountryCode)
    .then((rows) => {
      res.json({ "Error": false, "Message": "Success", "Cities": rows })
    })
    .catch((err) => {
      console.log(err);
      res.json({ "Error": true, "Message": "Error executing MySQL query" })
    })
});

router.post("/api/update", async (req, res, next) => {
  // Validate request body
  if (!req.body.City || !req.body.CountryCode || !req.body.Pop) {
    console.log(`Error on request body:`, JSON.stringify(req.body));
    return res.status(400).json({ message: `Error updating population: Missing required fields` });
  }

  try {
    const filter = {
      "Name": req.body.City,
      "CountryCode": req.body.CountryCode
    };
    const update = {
      "Population": req.body.Pop
    };

    // Execute update operation
    const updateResult = await req.db('city').where(filter).update(update);

    // Check if the update was successful
    if (updateResult) {
      res.status(201).json({ message: `Successful update for ${req.body.City}` });
    } else {
      res.status(404).json({ message: `City not found or no changes made` });
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Database error - update not completed' });
  }
});

////for testing: change method to post , body raw to below 
// {
//   "City":"Shanghai",
//   "CountryCode":"CHN",
//   "Pop":"2418330"
// }


module.exports = router;

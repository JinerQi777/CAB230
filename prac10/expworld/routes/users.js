const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');

var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async function (req, res, next) {

  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      error: true,
      message: "Request body incomplete - email and password needed"
    });
    return;
  }

  // 1. Retrieve email and password from req.body

  try {
    // 2. Determine if user already exists in table
    const users = await req.db.from("users").select("*").where("email", "=", email);
    if (users.length > 0) {
      // 2.2 If user does exist, return error response
      res.status(409).json({ error: true, message: "User already exists" });
      return;
    }

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    const insert = await req.db.from("users").insert({ email, hash });
    // 2.1 If user does not exist, insert into table
    if (insert) {
      res.status(201).json({ success: true, message: "User created" });
    }

  } catch (error) {

    res.status(500).json({ success: false, message: error.message });

  }
});


router.post('/login', async function (req, res, next) {
  // 1. Retrieve email and password from req.body
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      error: true,
      message: "Request body incomplete - email and password needed"
    });
    return;
  }
  // 2. Determine if user already exists in table
  try {
    const users = await req.db.from("users").select("*").where("email", "=", email);
    if (users.length === 0) {
      throw new Error("User does not exist");
    }
  // 2.1 If user does exist, verify if passwords match
  const user = users[0];
  const match=await bcrypt.compare(password, user.hash);
  // 2.1.2 If passwords do not match, return error response
  if(!match){
    throw new Error("Passwords do not match");
  }
  // 2.1.1 If passwords match, return JWT

    const expires_in = 60 * 60 * 24;
    const exp = Math.floor(Date.now() / 1000) + expires_in;
    const token = jwt.sign({ exp }, process.env.JWT_SECRET);
    res.status(200).json({
      token,
      token_type: "Bearer",
      expires_in
    });
  } catch (error) {

    res.status(500).json({ success: false, message: error.message });
  }


});


module.exports = router;

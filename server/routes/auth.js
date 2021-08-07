const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.get("/register", async (req, res) => {
  const user = await new User({
    username: "Gojo Satoru",
    email: "assomething@gmail.com",
    password: "123456",
  });
  await user.save();
  res.send("ok");
});

module.exports = router;

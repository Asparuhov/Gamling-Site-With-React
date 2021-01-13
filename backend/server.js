require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.post("/register", async (req, res) => {
  let { username, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPass = await bcrypt.hash(password, salt);
  User.findOne({ email: email }).then((user) => {
    if (user) {
      console.log("Email already registered");
    }
    const newUser = new User({
      username,
      email,
      password: hashedPass,
      balance: 5000,
    });
    newUser
      .save()
      .then(() => console.log("User created"))
      .catch((err) => console.log(err));
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (err) throw err;
        if (response) {
          const accessToken = jwt.sign(
            user.toJSON(),
            process.env.ACCESS_TOKEN_SECRET
          );
          res.json({ accessToken: accessToken });
          console.log("Authenticated");
        } else {
          console.log("Wrong password");
        }
      });
    } else {
      console.log("User not registered");
    }
  });
});
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(4000);
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));
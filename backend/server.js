const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://burnu-martials-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
mongoose.connect("mongodb+srv://BurnuMartial:burnu123@reactproject.o0b1sik.mongodb.net/burnumartial?retryWrites=true&w=majority");

app.get("/", (req, res) => {
  res.json("Hello");
})
// for register with mongoose
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});
// for login with mongoose
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Login Successfull.");
      } else {
        res.json("Password doesn't match.");
      }
    } else {
      res.json("No record exist.");
    }
  });
});
// app.get("/", (req, res) => {
//   res.send("Server Running");
// });
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

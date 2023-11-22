const express = require("express");
// const mysql = require("mysql");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

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

app.listen(3001, () => {
  console.log("server running");
});
// const { email, password } = req.body;
  // EmployeeModel.findOne({ email: email, password: password })
  //   .then((user) => {
  //     if (user) {
  //       res.json("Login Successful.");
  //     } else {
  //       res.status(401).json("Email or password is incorrect.");
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.status(500).json("Internal Server Error");
  //   });










  
// const db = mysql.createConnection({
//   host: "localhost",
//   user: 'root',
//   password: '',
//   database: 'register',
// });

// // For Register
// app.post("/register", (req, res) => {
//   const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
//   const values = [req.body.name, req.body.email, req.body.password];
//   db.query(sql, [values], (err, data) => {
//     if (err) {
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// });
// // For login
// app.post("/login", (req, res) => {
//   const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ? ";

//   db.query(sql, [req.body.email, req.body.password], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     if (data.length > 0) {
//       return res.json("Success");
//     } else {
//       return req.json("Failed");
//     }
//   });
// });

// app.get("/", (re, res) => {
//   return res.json("From Backend Side");
// });

// app.get("/", (re, res) => {
//   return res.json("From Backend Side");
// });

// app.listen(8081, () => {
//   console.log("server running");
// });

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("The Password is Incorrect")
        }
      } else {
        res.json("No Record Exist")
      }
    })
})

app.post('/register', async (req, res) => {
  try {
    // Validate the data
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, Email, and Password are required fields.' });
    }

    // Create a new employee record
    const employee = await EmployeeModel.create({ name, email, password });

    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(3001, () => {
  console.log("Server is Running")
})  
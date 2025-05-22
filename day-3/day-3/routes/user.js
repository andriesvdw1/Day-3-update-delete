const express = require("express");
const usersRouter = express.Router();

// This instruction will allow us to use the model
const User = require("../models/employee");

//
usersRouter.get(
  "/view", // matches /employee/view from app.js,and matched "app.use('/employees/)"
  async (req, res) => {
    // res.json({ message: `Get is working` });
    // we want to retrieve all the records from the database;
    // remember that we will use the model to interact with the database
    // the name of the model is User. Common pitfall: you must capitalise it

    try {
      const results = await User.find(); // fetches records from the database; but it will take time
      // res.status(200);
      // res.json(results);

      // what is the of results?
      // results is an array of objects
      // each object is a record from the database

      res.status(200).json(results);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
/* We may want to filter records that we fetch, and we may want to use an aspect of the record e.g. id
We will send an ID, and we will use it to filter the records
// the id is part  of the URL, so we will use req.params
*/
usersRouter.get(
  "/view/:id", // :id is a placeholder for the id from the request. Treat it like a variable
  async (req, res) => {
    let requestedId = req.params.id; // this will give us the id from the URL
    try {
      const results = await User.findById(requestedId); // fetches records from the database; but it will take time
      // if the user with the requested id is not found, we will get null, so we want to send status 404
      if (results === null) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.status(200).json(results);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
usersRouter.delete("/delete/:id", async (req, res) => {
  let requestedId = req.params.id;
  const results = await User.findByIdAndDelete(requestedId);

  res.status(200).json(results);
});

//New patch method
usersRouter.patch("/update/:id", async (req, res) => {
  let requestedId = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      requestedId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
    console.log("Successfully updated employee");
  } catch (error) {
    res.status(500).json({ message: "A server error occurred." });
  }
});

//New put method
usersRouter.put('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newEmployeeVersion = req.body;

    const result = await User.findByIdAndUpdate(id, newEmployeeVersion, { new: true });

    if (!result) {
      res.status(404).send({ message: 'Employee not found' });
    } else {
      res.send({ message: 'Employee updated successfully', result });
    }
  } catch (error) {
    res.status(500).send({ message: 'Server error:', error });
  }
});

usersRouter.post("/add", async (req, res) => {
  let { name, age, hobby } = req.body; // we will use destructuring to extract the values from the request body
  // generate your emplyee id
  // we may use the name and age to generate the employee id, or any other technique
  // let uniquiID = Math.random().toString(16).slice(2);

  // then we add here using the model
  let employeeToAdd = new User({ name, age, hobby });
  // then we will call the save method
  await employeeToAdd.save();

  console.log(employeeToAdd);
  res.json(employeeToAdd);
});
module.exports = usersRouter;

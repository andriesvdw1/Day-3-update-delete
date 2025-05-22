require("dotenv").config();
//
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;
const DB_URL = process.env.DB_URL;

let express = require("express");
app = express();

// We will configure our app to use JSON
// app.use is a middleware function
app.use(express.json());

// DB IS COMING HERE
let mongoose = require("mongoose");

try {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.error({ error });
}
// calling the connect method sets a file handle
const selectedDB = mongoose.connection;

selectedDB.on("error", (error) => {
  console.error(`There was an error`, error);
});
selectedDB.on("open", () => {
  console.log(`The database is running`);
});

app.listen(PORT, () => {
  console.error(`server is running on PORT: ${PORT}`);
});

/* FOR ALL ROUTES THAT STAT WITH /employees, we want to direct them to a hadler for all routes that start with that URL, e.g. /employyes/add */
// employees
const employeesRouter = require("./routes/user");

// This handler will be invoked for all routes that start with /employees
app.use("/employees", employeesRouter);

/* app.get("/employees/view", (req, res) => {});
app.post("/employees/add", (req, res) => {});
app.delete(/employees"/delete", (req, res) => {});
app.patch("/employees/patch", (req, res) => {});
app.get("/employees/view/:id", (req, res) => {}); */
// employee categories

// books

/* const booksRouter = require("./routes/book");

app.use("/employees", booksRouter);
app.get("/books/view", (req, res) => {});
app.post("/books/add", (req, res) => {});
app.delete("/books/delete", (req, res) => {});
app.patch("/books/patch", (req, res) => {});
app.get("/books/view/:id", (req, res) => {});
 */
// books categories

// policies

// archive

// roles

// ...

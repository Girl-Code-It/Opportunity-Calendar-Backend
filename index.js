require("dotenv").config();

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  cors = require("cors");

const { db_user, db_pwd, db_host, db_name } = require("./config");

//requiring routes
const jobRoutes = require("./routes/job"),
  userRoutes = require("./routes/user");

const mongoSrvString = `mongodb+srv://${db_user}:${db_pwd}@${db_host}/${db_name}?retryWrites=true&w=majority`;

// connect the database
const db = mongoose
  .connect(mongoSrvString, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //significant refactor of how it handles monitoring all the servers in a replica set or sharded cluster.
    //In MongoDB parlance, this is known as server discovery and monitoring.
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => {
    console.log("Couldn't connect to mongo db, err: ", err);
  });

app.use(cors());
// in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
// app.use(bodyParser.urlencoded({ extended: true })); //middleware for parsing bodies from URL.
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method")); //to support HTTP Verbs other than GET,POST

app.use("/jobs", jobRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT || 3030;
app.listen(port, function () {
  console.log(`[OK] server started on port ${port}`);
});

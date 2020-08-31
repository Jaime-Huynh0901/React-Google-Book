const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
const cors = require("cors");
const api = require("./serverUtils/api");

const app = express();
const PORT = process.env.PORT || 3001;

// let searchQuery;

if (app.get('env') === 'development') { require('dotenv').config(); }

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//define middleware here
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS from client-side
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookdb", {
  useNewUrlParser: true,
});

console.log("mongo uri =", process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

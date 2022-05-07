"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/CansDB");
const { print, printBook } = require("./models/books.sechema");

const PORT = process.env.PORT;
app.get("/printBook", printBook);
app.listen(PORT, () => console.log(`listening on ${PORT}`));

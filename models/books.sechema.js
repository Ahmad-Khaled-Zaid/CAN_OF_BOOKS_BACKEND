const res = require("express/lib/response");
const mongoose = require("mongoose");
let booksSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String },
});

const booksModel = mongoose.model("books", booksSchema);
const printBook = (req,res) => {
  let firstBook = new booksModel({
    title: "atomic habits",
    description:
      "book describing how to add new habits to your life using small addition role",
    status: "new",
  });
  firstBook.save();
  res.send('saved');
};
const print = (req, res) => {
  printBook();

  res.send("booksModel.find()");
};
module.exports = { printBook, print };

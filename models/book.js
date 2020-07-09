const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // title: { type: String },
  // author: { type: String },
  synopsis: String,
  link: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;

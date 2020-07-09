const router = require("express").Router();
// const express = require("express");
// const router = express.Router();
const booksController = require("../../controllers/booksController");
const Book = require("../../models/book");
const auth = require("../../middleware/auth");
const db = require("../../models");


// Matches with "/api/books"
// router.route("/")
// //   .get(booksController.findAll)
//   .post(auth, booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;


// @route GET api/books
// @desc Get All Books
// @access Private
router.get('/', auth, (req, res) => {
  Book.find()
    .sort({ date: -1 })
    .then(books => res.json(books));
});

// @route POST api/books
// @desc Create a book
// @access Private
// router.post('/', auth, (req, res) => {
//   const newBook = new Book({
//     book: req.body
//   });

router.post('/', auth, (req, res) => {
  db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})

// @route DELETE api/books/:id
// @desc Delete a book
// @access Private
router.delete('/:id', auth, (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({success: true}))
    ).catch(err => res.status(404).json({success: false})); 
})


module.exports = router;

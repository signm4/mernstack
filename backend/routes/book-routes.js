const express = require('express');
const router = express.Router();
const Product = require("../model/Book");
const Book = require('../model/Book');
const booksController = require('../controllers/books-controller')

router.get("/", booksController.getAllBooks);
router.get("/avail", booksController.getByAvail)
router.get("/unavail", booksController.getByUnAvail)
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
module.exports = router;
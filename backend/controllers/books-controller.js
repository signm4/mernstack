const { update } = require("../model/Book");
const Book = require("../model/Book");


const getAllBooks = async(req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch(err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({message: "No items found"})
    }
    return res.status(200).json({books})
};

const getById = async(req, res, next) => {
    const id = req.params.id //req.params.id
    let book;
    try {
        book = await Book.findById(id);
        // book = await Book.findOne({id : req.params.id})
    } catch (err){
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({message: "No Book found"})
    }
    return res.status(200).json({book})

};
const getByAvail = async (req, res, next) =>{
    let books;
    const query = {avail: true};
    try {
        books = await Book.find(query);
    } catch(err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({message: "No items found"})
    }
    return res.status(200).json({books})
};

const getByUnAvail = async (req, res, next) =>{
    let books;
    const query = {avail: false};
    try {
        books = await Book.find(query);
    } catch(err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({message: "No items found"})
    }
    return res.status(200).json({books})
};

const addBook = async (req, res, next ) => {
    const { title, author, publisher, isbn, avail, who, due} = req.body;
    let book;
    try {
        book = new Book ({
            // id,
            title,
            author,
            publisher,
            isbn,
            avail,
            who,
            due
        });
        await book.save();
    } 
    catch (err) {
    console.log(err);
    }

    if (!book) {
        return  res.status(500).json({message: 'unable to add'});
    }
    return res.status(201).json({ book });
};

const updateBook = async (req, res, next) =>{
    const id = req.params.id;
    const {title, author, publisher, isbn, avail, who, due} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            title,
            publisher,
            author,
            isbn,
            avail,
            who,
            due
            // 46.48
        });
        book = await book.save()
    } catch(err){
        console.log(err);
    }
    if (!book) {
        return  res.status(404).json({message: 'unable to Update by ID'});
    }
    return res.status(200).json({ book });

};

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.getByAvail = getByAvail;
exports.getByUnAvail = getByUnAvail;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
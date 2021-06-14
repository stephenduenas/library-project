const Book = require('../models/bookModel.js');

/**
 * Format book list from array to objects (with _id as property/key name)
 * @param {array} arr 
 * @returns object
 */
const formatBookList = (arr) => arr.reduce((accumulator, currentValue) => ({ ...accumulator, [currentValue._id]: currentValue }), {});

/**
 * Create book logic
 * @param {object} req 
 * @param {object} res 
 */
const createBook = async (req, res) => {
    const newBook = new Book({...req.body});
    await newBook.save();
    res.status(201).json(newBook);
};

/**
 * Update book logic
 * @param {object} req 
 * @param {object} res 
 */
const updateBook = async (req, res) => {
    const ID = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(ID, {...req.body, _id: ID }, { new: true });
    res.status(200).json(updatedBook);
};

/**
 * Delete book logic
 * @param {object} req 
 * @param {object} res 
 */
const deleteBook = async (req, res) => {
    const ID = req.params.id;
    const deletedPost = await Book.findByIdAndDelete(ID);
    res.status(200).json(deletedPost);
};

/**
 * List books logic
 * @param {object} req 
 * @param {object} res 
 */
const listBooks = async (req, res) => {
    const allBooks = await Book.find({});
    res.status(201).json(formatBookList(allBooks));
};

module.exports = { createBook, updateBook, deleteBook, listBooks };

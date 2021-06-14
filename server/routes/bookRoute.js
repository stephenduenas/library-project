const express = require('express');
const { createBook, updateBook, deleteBook, listBooks } = require('../controllers/bookController.js');

const router = express.Router();

router.get('/list', listBooks);
router.post('/', createBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

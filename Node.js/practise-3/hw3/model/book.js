const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bookName: {
        type: String,
        required: true,
    },
    author: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports.Book = mongoose.model('Book', schema);
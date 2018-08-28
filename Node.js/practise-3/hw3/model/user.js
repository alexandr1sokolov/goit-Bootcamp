const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },

    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
});

module.exports.User = mongoose.model('User', schema);
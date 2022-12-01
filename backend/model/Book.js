const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    avail: {
        type: Boolean,
        // required: true
    },
    who: {
        type: String,
        // required: true
    },
    due: {
        type: String,
        // required: true
    }
});

module.exports = mongoose.model("Book", bookSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsPostSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnailImage: {
        type: String,
        required: true
    },
    time: {
        type: String,
        date: Date.now().toLocaleString('en-IN'),
    },
    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("newsPost", newsPostSchema);
/**
 * Created by mats on 30.04.15.
 */

var mongoose = require('mongoose');

// Schema
var documentSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    school: String,
    name: String,
    questions: [{
        question: String,
        options: [String],
        answer: Number
    }]
});

module.exports = mongoose.model('Document', documentSchema);
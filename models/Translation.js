var mongoose = require('mongoose');

var TranslationSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    }
});

module.exports = TranslationSchema;
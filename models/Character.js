var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
   character: {
       type: String,
       required: true
   },
    translation: [{
        type: Schema.ObjectId,
        ref: 'Translation'
    }],
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

module.exports = CharacterSchema;
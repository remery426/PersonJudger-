var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CommentSchema = new Schema({
    like: {type:Number, required :true},
    datetime: { type: Date, required: true},
    content: { type: String, required: true}

})

mongoose.model('Comment', CommentSchema);

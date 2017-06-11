var mongoose = require('mongoose');
var Schema = mongoose.Schema

var personSchema = new Schema({
    name: {type:String, required: true},
    age: {type:Number, required: true},
    location: {type:String, required: false},
    avgRating: {type:Number, required: false},
    ratingTotal: {type:Number, required:  false},
    numRatings: {type:Number, required: false},
    about: { type: String, required: false},
    comments: { type: Array, required: false}

})

mongoose.model('Person', personSchema);

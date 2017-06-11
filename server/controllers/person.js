var mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = (function(){
    return{


createPerson: function(req,res){
    req.body.avgRating = req.body.rating
    req.body.ratingTotal = req.body.rating
    req.body.numRatings = 1
    var person = new Person(req.body)
    person.save(function(err,data){
        if(err){
          console.log(err)
          res.json('Error please again')

        }
        else{
          console.log(data)
          res.json(data)
        }
    })

}


    }

})()

var person = require('./../controllers/person.js')
module.exports = function(app){
    app.post('/createPerson', function(req,res){
        person.createPerson(req,res)
    })
}

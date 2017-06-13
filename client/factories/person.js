app.factory('personFactory', function($http, $location, $route){
    var factory = {};
    factory.create = function(person){
        $http.post('/createPerson', person).then(function(output){
        console.log(output.data)
        })
    }

    return factory

})

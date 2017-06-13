app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/addPerson.html'
    })
    
    .otherwise({
        templateUrl: 'partials/addPerson.html'
    })
})

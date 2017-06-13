app.controller('personController', function($scope, personFactory){

    $scope.create = function(){

      personFactory.create($scope.Person)

}

})

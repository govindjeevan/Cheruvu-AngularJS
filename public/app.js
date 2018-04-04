var app= angular.module('myApp',[]);


app.controller('mainController', function($scope, $http) {

  $scope.submitForm = function() {
    console.log($scope.farmer);
    $http.post('/data', $scope.farmer)
    $scope.submitted=true;
    
    }
});

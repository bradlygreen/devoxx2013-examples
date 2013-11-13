var myApp = angular.module('coolApp', []);

myApp.controller('GreetCtrl', function ($scope) {
    $scope.greeter = { greeting: 'Devoxx'};
});
angular.module("umbrellaAlert")
.config(['$routeProvider', function($routeProvider){
    $routeProvider.

    when('/', {


        templateUrl:"components/home/home.html"
    })

    .when('/dashboard', {


        templateUrl:"components/Weather/dashboard.html"
    });



}]);
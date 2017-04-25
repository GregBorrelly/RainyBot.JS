angular.module('umbrellaAlert', []);

angular.module('umbrellaAlert')
    .controller('mainCrtl', ['$scope', function ($scope) {
        $scope.geolocationLoaded = false;

        $scope.callWeatherAPI = function (latitude, longitude) {
            console.log("This ran");
            var apiKey = "324cb7915f1b85e43f1bfb17f861a027";
            $scope.apiUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";
            console.log($scope.apiUrl);

           return apiKey;



        };

        function savePosition(location) {

            $scope.positionObjects = location;


        };
        var getPositionObject = function (position) {
            // Returns an object with both lattitude and longitue
            console.log("1");
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            $scope.apiUrl = $scope.callWeatherAPI(latitude, longitude);
            
            $scope.geolocationLoaded = true;




        };

        var getLocation = function (getPositionObject) {
            if (navigator.geolocation) {
                var locationObject = navigator.geolocation.getCurrentPosition(getPositionObject);
                 document.querySelector(".message").insertAdjacentHTML = $scope.apiUrl;




            } else {


                console.log("GEOLOCATION IS NOT SUPPORTED BY THE BROWSER.")
            }
        };

        $scope.initializeApp = function () {
            $scope.apiUrl = "test";

            getLocation(getPositionObject);




        };


    }]);
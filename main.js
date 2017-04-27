angular.module('umbrellaAlert', []);

angular.module('umbrellaAlert')
    .controller('mainCrtl', ['$scope', '$http', function ($scope, $http) {
        $scope.geolocationLoaded = false;
        

        var callWeatherAPI = function (latitude, longitude) {
            console.log("This ran");
            var apiKey = "324cb7915f1b85e43f1bfb17f861a027";
            var apiUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";
            console.log(apiUrl);
            return apiUrl;




        };

        var geoLocation = {

    getLocation: function() {

        var deferred = $.Deferred();

        // if geo location is supported
        if(navigator.geolocation) {

            // get current position and pass the results to getPostalCode or time out after 5 seconds if it fails
            navigator.geolocation.getCurrentPosition(deferred.resolve, this.geoLocationError, {
                timeout: 5000
            });

        } else {

            //geo location isn't supported
            console.log('Your browser does not support Geo Location.');
        }

        return deferred.promise();

    },

    geoLocationError: function() {
        console.log('Geo Location failed.');
    }

};
        $scope.initializeApp = function () {
            $.when(geoLocation.getLocation()).then(function(data, textStatus, jqXHR) {

                $scope.cordinates = {longitude:data.coords.longitude, latitude:data.coords.latitude};
                console.log($scope.cordinates);
                $scope.theLink = callWeatherAPI( data.coords.latitude, data.coords.longitude);
                 
                var req = new XMLHttpRequest();
                req.open("GET", 'http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=626020384932586fe3fdaafc11b18c48&units=imperial', false);
                req.send(null);
                console.log(req.status, req.responseText)
                $scope.globalRes = req.responseText;

            });

            console.log($scope.theLink);
        
            };

    }]);
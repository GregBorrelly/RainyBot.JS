angular.module('umbrellaAlert')
    .controller('mainCrtl', ['$scope', function ($scope) {

        $scope.why = false;

        function get(url) {
            return new Promise(function (succeed, fail) {
                var req = new XMLHttpRequest();
                req.open("GET", url, true);
                req.addEventListener("load", function () {

                    if (req.status < 400)
                        succeed(JSON.parse(req.responseText));

                    else
                        fail(new Error("Request FAiled: " + req.statusText));
                });
                req.addEventListener("error", function () {
                    fail(new Error("Network error"));
                });
                req.send(null);
            });
        }


        if ("geolocation" in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var API = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=626020384932586fe3fdaafc11b18c48&units=imperial";

                get(API).then(function (response) {
                    $scope.$apply(function () {
    
                        data = response;
                        $scope.why = true;
                        $scope.Weather = {


                            humidity: data.list[0].main.humidity,
                            pressure: data.list[0].main.pressure,
                            temperature: Math.round(data.list[0].main.temp),
                            maxTemp: Math.round(data.list[0].main.temp_max),
                            minTemp: Math.round(data.list[0].main.temp_min),
                            description: data.list[0].weather[0].description,
                            shortDes:  data.list[0].weather[0].main,
                            windSpeed: data.list[0].wind.speed


                        };

                        

                      
                        
                        
                        
                        // Math.round($scope.data.list[0]["main"]["temp"]);

                       

                    });

                });
            });
        } else {
            /* geolocation IS NOT available */

            

        }



    }]);
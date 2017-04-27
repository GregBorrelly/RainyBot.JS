angular.module('umbrellaAlert', []);

angular.module('umbrellaAlert')
    .controller('mainCrtl', ['$scope', '$http', function ($scope, $http) {
        $scope.geolocationLoaded = false;

        $scope.callWeatherAPI = function (latitude, longitude) {
            console.log("This ran");
            var apiKey = "324cb7915f1b85e43f1bfb17f861a027";
            var apiUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";
            console.log(apiUrl);
            return apiUrl;




        };

   

        $scope.getLocation = function () {
            if (navigator.geolocation) {
                console.log(1)
                navigator.geolocation.getCurrentPosition(function(position){
                      console.log(2)
                     var  positionObject = {latitude:25, longitude:35}; 
                      return positionObject;
                });
                 




            } else {


                console.log("GEOLOCATION IS NOT SUPPORTED BY THE BROWSER.")
            }
        };

        $scope.initializeApp = function () {
        

       
            var position= $scope.getLocation();
            while (position == undefined){
                console.log('getting object...');
                 
                
          

            }

              console.log(position);

            }
           
           
    
        
     };

        


    
        // number of drops created.
        var nbDrop = 10; 

        // function to generate a random number range.
        function randRange( minNum, maxNum) {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
        }

        // function to generate drops
        $scope.createRain = function() {

            for( i=1;i<nbDrop;i++) {
            var dropLeft = randRange(0,1600);
            var dropTop = randRange(-100,400);

            $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
            $('#drop'+i).css('left',dropLeft);
            $('#drop'+i).css('top',dropTop);
            }

    }

        

    }]);
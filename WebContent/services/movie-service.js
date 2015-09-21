/**
 * Created by rajesh veldandi on 9/20/2015.
 */
(function(){


    angular.module('captainApp').factory('movieService', movieService);


    function movieService($http){

        var mvData = {};
        mvData.getData = function(){
            return $http({
                method:'GET',
                url:'/Angular-app/WebContent/json/movie.json',
                dataType :'json',
                //success: function( response ) {
                //    console.log( response ); // server response
                //}
            });
        }
        return mvData;
    }
    //console.log(movieService.getData.success());

})();
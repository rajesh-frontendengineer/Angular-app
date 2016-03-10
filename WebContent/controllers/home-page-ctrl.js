/**
 * Created by rajesh veldandi on 9/15/2015.
 */

"use strict";
(function(){

    angular.module('captainApp').controller('HomeCtrl',['movieService',HomeControl]);
    function HomeControl(movieService){
            // My second file
        var hCtrl = this;
        hCtrl.na = 'Ajax';
        console.log(hCtrl.na);
        console.log('HomeControl');
        hCtrl.dataList = [];
        movieService.getData().success(function(data){
            hCtrl.dataList = data.content;
            //console.log(data.Title);
            console.log(hCtrl.dataList[0].views);
        })
    }


})();
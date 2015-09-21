/**
 * Created by rajesh veldandi on 9/20/2015.
 */


"use strict";
(function(){

    angular.module('captainApp').controller('DashOverViewCtrl',['movieService',DashOverViewCtrl]);
    function DashOverViewCtrl(movieService){

        var dovCtrl = this;
        dovCtrl.na = 'Ajax';
        console.log(dovCtrl.na);
        console.log('DashOverViewCtrl');
        dovCtrl.dataList = [];
        movieService.getData().success(function(data){
            dovCtrl.dataList = data.content;
            //console.log(data.Title);
            console.log(dovCtrl.dataList[0].views);
        })
    }



})();
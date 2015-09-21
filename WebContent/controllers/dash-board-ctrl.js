/**
 * Created by rajesh veldandi on 9/20/2015.
 */


"use strict";
(function(){

    angular.module('captainApp').controller('DashBoardCtrl',['movieService',DashBoardCtrl]);
    function DashBoardCtrl(movieService){

        var dCtrl = this;
        dCtrl.na = 'Ajax';
        console.log(dCtrl.na);
        console.log('DashBoardCtrl');
        dCtrl.dataList = [];
        movieService.getData().success(function(data){
            dCtrl.dataList = data.content;
            //console.log(data.Title);
            console.log(dCtrl.dataList[0].views);
        })
    }



})();
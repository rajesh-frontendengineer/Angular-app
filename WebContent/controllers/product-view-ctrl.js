
/**
 * Created by rajesh veldandi on 9/20/2015.
 */


(function(){

    angular.module('captainApp').controller('ProductCtrl',ProductControl);
    ProductControl.$inject = ['$routeParams','peopleData'];
    function ProductControl($routeParams,peopleData){

        var pCtrl = this;
        console.log('ContactControl');
        console.dir(peopleData);
        pCtrl.person = peopleData.data;

    }


})();
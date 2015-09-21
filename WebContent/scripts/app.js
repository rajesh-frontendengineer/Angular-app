/**
 * Created by raa on 2/5/2015.
 */
/**
 * Created by raa on 2/4/2015.
 */
"use strict";
(function(){

    angular.module('captainApp').controller('HomeCtrl',HomeControl);
    angular.module('captainApp').controller('UserCtrl',UserControl);
    angular.module('captainApp').controller('ProductCtrl',ProductControl);


    function HomeControl(){

        var hCtrl = this;
        console.log('HomeControl');
    }


    UserControl.$inject = ['$routeParams'];
    function UserControl($routeParams){

        var uCtrl = this;
        console.log('AboutControl');
        console.dir($routeParams);
        uCtrl.params = $routeParams;
    }

    ProductControl.$inject = ['$routeParams','peopleData'];
    function ProductControl($routeParams,peopleData){

        var pCtrl = this;
        console.log('ContactControl');
        console.dir(peopleData);
        pCtrl.person = peopleData.data;

    }
})();
























































///**
// * Created by rajesh veldandi on 9/10/2015.
// */
//
//
//"use strict";
//(function(){
//
//    angular.module('captainApp').controller('hCtrl',HomeCtrl);
//    angular.module('captainApp').controller('cCtrl',CategoryCtrl);
//    angular.module('captainApp').controller('pCtrl',ProductCtrl);
//
//
//    function HomeControl(){
//
//        var hCtrl = this;
//        console.log('HomeControl');
//
//    }
//
//    function CategoryCtrl(){
//
//        var cCtrl = this;
//        console.log('CategoryCtrl');
//    }
//    function ProductCtrl(){
//
//        var pCtrl = this;
//        console.log('ProductCtrl');
//    }
//
//    //AboutControl.$inject = ['$routeParams'];
//    //function AboutControl($routeParams){
//    //
//    //    var abCtrl = this;
//    //    console.log('AboutControl');
//    //    console.dir($routeParams);
//    //    abCtrl.params = $routeParams;
//    //}
//    //
//    //ContactControl.$inject = ['$routeParams','peopleData'];
//    //function ContactControl($routeParams,peopleData){
//    //
//    //    var cCtrl = this;
//    //    console.log('ContactControl');
//    //    console.dir(peopleData);
//    //    cCtrl.person = peopleData.data;
//    //
//    //}
//})();

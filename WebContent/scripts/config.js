/**
 * Created by Rajesh Veldandi on 9/10/2015.
 */
"use strict";
(function(){

    var captainApp = angular.module('captainApp'); //get module
    angular.module('captainApp',['ui.router']);

    angular.module('captainApp').config(['$stateProvider','$urlRouterProvider',moduleConfig]);

    function moduleConfig($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/Error");
        //
        // Now set up the states
        $stateProvider
            //States and nested views
            .state('Home-page', {
                url: "/Home-page",
                templateUrl: "views/Home-page.html"
            })
            .state('Category', {
                url: "/Category",
                templateUrl: "views/Category.html",
                controllerAs: 'Ctgry'
            })
            .state('Category.Product-view', {
                url: "/Product",// product name dynamic
                templateUrl: "views/Product-view.html",
                controller: ''
            })


};


})();
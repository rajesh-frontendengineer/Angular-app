/**
 * Created by raa on 2/4/2015.
 */
"use strict";
(function(){
    angular.module('captainApp',['ui.router']);
    angular.module('captainApp').config(['$stateProvider','$urlRouterProvider',ModulerConfig]);

    function ModulerConfig($stateProvider,$urlRouterProvider){
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/state1");
        //
        // Now set up the states
        $stateProvider
        //States and nested views
            .state('Dash-Board', {
                url:'/Dash-Board',
                templateUrl: 'WebContent/views/dash-board.html', //url of the template
                controller: 'DashBoardCtrl',  //name of the controller
                controllerAs: 'dCtrl' //how it should be referred in the template
            })
            .state('User', {
                url:'/User/:name/:city',
                templateUrl: 'WebContent/views/User-page.html', //url of the template
                controller: 'UserCtrl',  //name of the controller
                controllerAs: 'uCtrl' //how it should be referred in the template
            })
            .state('Dash-Board.Overview', {
                url:'/Dash-Board/Overview',
                templateUrl: 'WebContent/views/categories/overview.html', //url of the template
                controller: 'OverViewCtrl',  //name of the controller
                controllerAs: 'ovCtrl', //how it should be referred in the template
            })
            .state('Dash-Board.Analytics', {
                url:'/Dash-Board/Analytics',
                templateUrl: 'WebContent/views/categories/analytics.html', //url of the template
                controller: 'AnalyticsCtrl',  //name of the controller
                controllerAs: 'aCtrl', //how it should be referred in the template
            })

        function LoadData($http){

            return $http({
                method : 'GET',
                url:'http://jsonplaceholder.typicode.com/users/1'
            });
        }

    }

})();






























































/**
 * Created by Rajesh Veldandi on 9/10/2015.
 */

//(function(){
//
//    var captainApp = angular.module('captainApp'); //get module
//    angular.module('captainApp',['ngRouter']);
//
//    angular.module('captainApp').config(['$routeProvider',moduleConfig]);
//
//    function moduleConfig($routeProvider) {
//        //
//        // For any unmatched url, redirect to /state1
//        //
//        // Now set up the states
//        $routeProvider
//            //States and nested views
//            .when('/Home-page', {
//                templateUrl: "WebContent/views/Home-page.html",
//                controller: 'HomeCtrl',  //name of the controller
//                controllerAs: 'hCtrl'
//            })
//            .when('/Category', {
//                templateUrl: "WebContent/views/Category.html",
//                controller: 'CategoryCtrl',  //name of the controller
//                controllerAs: 'cCtrl'
//            })
//            .when('/Product-view', {
//                templateUrl: "WebContent/views/Product-view.html",
//                controller: 'ProductCtrl',  //name of the controller
//                controllerAs: 'pCtrl'
//            })
//            .otherwise({
//                redirectTo: '/Home-page' //redirects to this path if nothing matches
//            });
//}
//})();
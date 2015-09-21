/**
 * Created by rajesh veldandi on 9/20/2015.
 */
(function(){
    angular.module('captainApp').controller('UserCtrl',UserControl);
    UserControl.$inject = ['$routeParams'];
    function UserControl($routeParams){

        var uCtrl = this;
        console.log('AboutControl');
        console.dir($routeParams);
        uCtrl.params = $routeParams;
    }

})();
/**
 * Created with JetBrains WebStorm.
 * User: Maksim.Kanev
 * Date: 6/3/13
 * Time: 2:11 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('collabControl', ['collabControl.filters', 'collabControl.services', 'collabControl.directives']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/partial0', controller: SeminarsCtrl});
        $routeProvider.when('/view1', {templateUrl: 'partials/partial0', controller: SeminarsCtrl});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial1', controller: SeminarsCtrl});
        $routeProvider.when('/view3', {templateUrl: 'partials/partial2', controller: SeminarsCtrl});
        $routeProvider.when('/view4', {templateUrl: 'partials/partial3', controller: SeminarsCtrl});
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
    }]);

//$(function () {
//    $('.thumbnail').hover(
//        function () {
//            $(this).children('.caption').fadeIn(200);
//        },
//        function () {
//            $(this).children('.caption').fadeOut(200);
//        }
//    );
//});

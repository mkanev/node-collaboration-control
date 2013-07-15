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
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
    }]);
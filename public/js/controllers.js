/**
 * Created with JetBrains WebStorm.
 * User: Maksim.Kanev
 * Date: 6/3/13
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

/* Controllers */

function SeminarsCtrl($scope, $http) {
    $http({method: 'GET', url: '/api/seminars'}).
        success(function (data, status, headers, config) {
            $scope.items = data.items;
        }).
        error(function (data, status, headers, config) {
            $scope.articles = [];
            $scope.message = 'Error!';
        });
}

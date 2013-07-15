/**
 * Created with JetBrains WebStorm.
 * User: Maksim.Kanev
 * Date: 6/3/13
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

/* Filters */

angular.module('collabControl.filters', []).
    filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]);
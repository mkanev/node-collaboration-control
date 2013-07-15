/**
 * Created with JetBrains WebStorm.
 * User: Maksim.Kanev
 * Date: 6/3/13
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

/* Directives */


angular.module('collabControl.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('isoGrid',function () {
        return {
            link: function (scope, elm, attrs) {
                scope.$on('isoGridLoaded', function (event) {
                    fireIsotopeReLayout($(elm));
                });
            }
        }
    }).
    directive('isoGridRepeat', function () {
        return {
            link: function (scope, elm, attrs) {
                if (scope.$last) {
                    scope.$emit('isoGridLoaded');
                }
            }
        }
    })
;

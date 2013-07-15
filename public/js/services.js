/**
 * Created with JetBrains WebStorm.
 * User: Maksim.Kanev
 * Date: 6/3/13
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('collabControl.services', []).
    value('version', '0.1');
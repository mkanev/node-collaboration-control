/**
 * Created with JetBrains WebStorm.
 * User: Maksim.Kanev
 * Date: 6/3/13
 * Time: 6:31 PM
 * To change this template use File | Settings | File Templates.
 */
var async = require('async'),
    fs = require('fs');

module.exports = function (app) {

    // seminars
    var seminars = require("../app/controllers/seminars");
    app.get('/api/seminars', seminars.seminars);

    // home
    app.get('/', seminars.index);

    var angular = require("../app/controllers/angular");
    app.get('/partials/:name', angular.partials);
}
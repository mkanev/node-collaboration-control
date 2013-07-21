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
    var root = require('../app/controllers/index')
        , seminars = require('../app/controllers/seminars')
        , blog = require('../app/controllers/blog')
        , playground = require('../app/controllers/playground')
        , incubator = require('../app/controllers/incubator')
        ;
    // home
    app.get('/', root.index);
    app.get('/seminars', seminars.index);
    app.get('/blog', blog.index);
    app.get('/playground', playground.index);
    app.get('/incubator', incubator.index);
};
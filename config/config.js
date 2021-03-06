/**
 * Created with JetBrains WebStorm.
 * User: Maksim.Kanev
 * Date: 6/3/13
 * Time: 6:24 PM
 * To change this template use File | Settings | File Templates.
 */

var path = require('path')
    , rootPath = path.normalize(__dirname + '/..');


module.exports = {
    development: {
        db: '',
        root: rootPath,
        app: {
            name: 'Collaboration Control'
        }
    },
    test: {
        db: '',
        root: rootPath,
        app: {
            name: 'Collaboration Control Test'
        }
    },
    production: {}
};
/**
 * Created with JetBrains WebStorm.
 * User: Maksim.Kanev
 * Date: 6/3/13
 * Time: 6:38 PM
 * To change this template use File | Settings | File Templates.
 */
exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};
var Tablet = require('../models/tablet');
// List of all Costumes
exports.tablet_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.tablet_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.tablet_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.costume_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.costume_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

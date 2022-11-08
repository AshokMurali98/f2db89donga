var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tablet_controller = require('../controllers/test');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/tablets', tablet_controller.tablet_create_post);
// DELETE request to delete Costume.
router.delete('/tablets/:id', tablet_controller.tablet_delete);
// PUT request to update Costume.
router.put('/tablets/:id', tablet_controller.tablet_update_put);
// GET request for one Costume.
router.get('/tablets/:id', tablet_controller.tablet_detail);
// GET request for list of all Costume items.
router.get('/tablets', tablet_controller.tablet_list);
module.exports = router;
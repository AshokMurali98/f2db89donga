var express = require('express');
const tablet_controlers= require('../controllers/test');
var router = express.Router();

/* GET home page. */
router.get('/', tablet_controlers.tablet_view_all_Page);
router.get('/tablets/:id', tablet_controlers.tablet_detail);

module.exports = router;



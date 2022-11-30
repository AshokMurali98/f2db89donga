var express = require('express');
const tablet_controlers = require('../controllers/test');
var router = express.Router();

// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    console.log( "%%%%%%%%%%%%%%" +req.originalUrl)
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', tablet_controlers.tablet_view_all_Page);
router.get('/tablets/:id', tablet_controlers.tablet_detail);

router.get('/detail', tablet_controlers.tablet_view_one_Page);

/* GET create Tabler page */
router.get('/create',secured, tablet_controlers.tablet_create_Page);

/* GET create update page */
router.get('/update', secured, tablet_controlers.tablet_update_Page);

/* GET delete costume page */
router.get('/delete',secured, tablet_controlers.tablet_delete_Page);

module.exports = router;



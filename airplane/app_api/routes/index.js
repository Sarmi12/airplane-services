var express = require('express');
var router = express.Router();
var ctrlTables = require('../controllers/tables')

router.get('/tables/:climbid', ctrlTables.ClimbReadOne);
router.get('/tables/:flapsid', ctrlTables.FlapsReadOne);
router.get('/tables/:landingid', ctrlTables.LandingReadOne);

module.exports = router;
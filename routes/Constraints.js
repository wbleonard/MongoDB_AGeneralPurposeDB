var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
        
          res.render('constraints', { title: 'MongoDB - General purpose database for GIANT IDEAS' });
     
});

module.exports = router;
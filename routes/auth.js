var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/register', function(req, res, next) {
    const { fullName, email, password } = req.body;
    res.json({ fullname, email, password });
});

router.post('/login', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



module.exports = router;


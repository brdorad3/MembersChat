var express = require('express');
var router = express.Router();
const userCon = require("../controllers/userController")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/sign-up', userCon.sign_up_get);
router.post("/sign-up", userCon.sign_up_post);
router.get('/log-in', userCon.log_in_get)

module.exports = router;

var express = require('express');
var router = express.Router();
const userCon = require("../controllers/userController")


/* GET home page. */
router.get('/', userCon.index)
router.get('/sign-up', userCon.sign_up_get);
router.post("/sign-up", userCon.sign_up_post);
router.get('/log-in', userCon.log_in_get)
router.post('/log-in', userCon.log_in_post)

module.exports = router;

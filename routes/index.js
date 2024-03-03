const express = require('express');
const router = express.Router();
const userCon = require("../controllers/userController")
const messCon = require("../controllers/messController")

/* GET home page. */
router.get('/', userCon.index)
router.get('/sign-up', userCon.sign_up_get);
router.post("/sign-up", userCon.sign_up_post);
router.get('/log-in', userCon.log_in_get)
router.post('/log-in', userCon.log_in_post)
router.get("/member", (req, res, next)=>{
    res.render("member");
})
router.post("/member", userCon.member_post);

router.get("/message", messCon.create_get);
router.post("/message", messCon.create_post);

module.exports = router;

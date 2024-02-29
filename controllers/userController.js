const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

exports.sign_up_get = asyncHandler(async(req, res, next)=>{

    res.render("sign-up_form")
})


exports.sign_up_post = [
    body("first").trim().isLength({min:1}).escape(),
    body("last").trim().isLength({min:1}).escape(),
    body("email").trim().isLength({min:1}).isEmail().escape(),
    body("password").trim().isLength({min:8}).isStrongPassword().escape(),
    body("confirm").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match');
        }
        return true;
    }),

    asyncHandler(async(req, res, next)=>{
        const errors = validationResult(req)
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            first_name: req.body.first,
            last_name: req.body.last,
            email: req.body.email,
            password: hashedPassword,
            member: false,
            admin: false
        });
       
        await user.save();
        res.redirect("/");
    
    })
]
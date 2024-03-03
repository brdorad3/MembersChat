const Message = require("../models/message");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.create_get = asyncHandler(async(req, res, next)=>{
    res.render("message")
})
exports.create_post = asyncHandler(async(req, res, next)=>{
    
    body("content").isLength({min:1, max:50}).escape();

    const message = new Message({
        time: new Date().toLocaleString(),
        content: req.body.content,
        author: req.body.user
    })
    await message.save()
    res.redirect("/")
    console.log(message)
})
const Message = require("../models/message");
const User = require("../models/user");
const { DateTime } = require("luxon");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const dt = DateTime.now();
exports.create_get = asyncHandler(async(req, res, next)=>{
    console.log(res.locals)
    res.render("message")
    
    
})
exports.create_post = asyncHandler(async (req, res, next) => {
    
    body("content").isLength({ min: 1, max: 50 }).withMessage('Content must be between 1 and 50 characters').escape();

   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("index", { errors: errors.array() });
    }

   
    const message = new Message({
        time: DateTime.now().toLocaleString(),
        content: req.body.content,
        author: req.user
    });

    
    await message.save();

    const messages = await Message.find().sort({ time: 1 }).exec();
    
    res.redirect("/")
});

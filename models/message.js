const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    time: {
        type: Date,
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
         ref: "User"
    }
})

module.exports = mongoose.model("Message", MessageSchema);

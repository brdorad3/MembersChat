const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
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
MessageSchema.virtual("url").get(function () {
    return "/" + this._id;
  });

module.exports = mongoose.model("Message", MessageSchema);

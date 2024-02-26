const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required:true
    },
    last_name: {
        type: String,
        required:true
    },
    email: {
        type: email,
        required: true,
    },
    password: {
        type: password,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default:false
    }

})

module.export = mongoose.model("User", UserSchema)
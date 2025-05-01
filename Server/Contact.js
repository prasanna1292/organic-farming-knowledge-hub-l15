const mongoose = require("mongoose");

const userSchema = {
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
}

const CustModel = mongoose.model("customer",userSchema)
module.exports = CustModel;
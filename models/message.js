
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var MessageSchema = new mongoose.Schema({
	name: String,
    email: String,
    school_name:String,
    subject:String,
    message:String,
    is_School_student:{type:Boolean,default:false},
    messagedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model("Message",MessageSchema);

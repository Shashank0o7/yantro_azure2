
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var CartSchema = new mongoose.Schema({
    user_id:String,
    username:String,
    code:[{
        type:String
    }],
    c_name:[{type:String}],
    amount:[{type:Number}],
    total_amount:Number
});
 

module.exports = mongoose.model("Cart",CartSchema);




var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var TransactionSchema = new mongoose.Schema({
    user_id:String,
    Transaction_id:[{type:String}],
    // order_id:String,
    course_code:[{type:String}],
    course_name:[{type:String}]
});
 

module.exports = mongoose.model("Transaction",TransactionSchema);




var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
// add course to this schema
// add class and school name in course schema.
var UserSchema = new mongoose.Schema({
	username: String,
	//name: String,
	phone : String,
	education :String,// remeber it is = to class
	date:String,
	school:{
		type:String,
		default:"none"
	},//newly
	admis_no:{
		type:String,
		default:"none"
	},//newly
	code:{
		type:String,
		default:"none"
	},//newly
	gnerate_code:[{
		stud_admis_no:String,
		stud_code:String
	
	}],
	isAdmin:{type:Boolean,default:false},
	isSchoolAdmin:{type:Boolean,default:false},
	bought:{
		type:Boolean,
		default:false
	},
	doubts:[{
		type: mongoose.Schema.Types.ObjectId,
		ref:"Doubt"
	}],
	testtaken: [{test:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Test"
		},
		title:String,
	   score:{type:String,default:"none"},
	   fullmarks:{type:String,default:"none"},
	   percentage:{type:String,default:"none"}
		}],

		testtooks:[{
			type: mongoose.Schema.Types.ObjectId,
			ref: "TT"
	       }
	],
	city: String,
	state: String,
	password: String
});
 UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);

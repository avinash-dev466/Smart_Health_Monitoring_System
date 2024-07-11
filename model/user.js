const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
 email : {
    type : String,
    required : true
  },
 username : {
    type : String,
    required : true
  },
 password :{
    type : String,
    required : true
  },
 
});
let USER = mongoose.model('user',userSchema)
module.exports = USER
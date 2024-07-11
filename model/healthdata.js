const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthSchema = new Schema({
Name : {
    type : String,
    required : true
  },
 Blood_groups : {
    type : String,
    required : true
  },
 Sugar : {
    type : String,
    required : true
  },
 BP :{
    type : String,
    required : true
  },
  Oxygen_Level :{
    type : String,
    required : true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user' 
  },
});
let HEALTHDATA = mongoose.model('healthdate',healthSchema)
module.exports = HEALTHDATA
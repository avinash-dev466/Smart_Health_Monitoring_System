const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportsSchema = new Schema({
 ReportsName : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  ReportsImage : {
    type : String,
    required : true,
  },
  status  :{
    type : String,
    enum : ["pending","reject","approve"],
    default : "pending",
    require : true
}
  
});
let REPORTS = mongoose.model('reports',reportsSchema)
module.exports = REPORTS
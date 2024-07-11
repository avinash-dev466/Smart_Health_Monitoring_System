const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationsSchema = new Schema({
 send : {
    type : String,
  },
  receive : {
    type : String,
  },
  status  :{
    type : String,
    enum : ["pending","reject","approve"],
    default : "pending",
    require : true
}
});
let NOTIFICATIONS = mongoose.model('notifications',notificationsSchema)
module.exports = NOTIFICATIONS
var express = require('express');
let notificationsController = require('../controller/notifications')
var router = express.Router();

/* GET home page. */
router.post('/notificationsAdd', notificationsController.AddNotifications);
router.get('/', notificationsController.ViewNotifications);

module.exports = router;

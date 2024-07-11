var express = require('express');
var healthdatecontroller = require('../controller/healthdata');
var usercontroller = require('../controller/user');
var router = express.Router();

router.post('/dataAdd',usercontroller.sequre,healthdatecontroller.AddHealthData);
router.get('/',usercontroller.sequre,healthdatecontroller.ViewHealthData);
router.delete('/:id',usercontroller.sequre,healthdatecontroller.DeleteHealthData);
router.patch('/:id',usercontroller.sequre,healthdatecontroller.UpdataHealthData);

module.exports = router;

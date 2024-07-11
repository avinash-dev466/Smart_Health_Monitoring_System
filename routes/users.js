var express = require('express');
var usercontroller = require('../controller/user');
var router = express.Router();

/* GET users listing. */
router.post('/Singup',usercontroller.userSingup);
router.post('/Login',usercontroller.sequre,usercontroller.userLogin);
router.get('/',usercontroller.sequre,usercontroller.AllUserData);
router.patch('/:id',usercontroller.sequre,usercontroller.updataUser);

module.exports = router;

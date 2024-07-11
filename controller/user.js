let USER = require ('../model/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.sequre = async function(req, res, next) {
    try {
        let token = req.headers.authorization
      if(!token){
        throw new Error('Please attech Token..! ')
      }
      
      var decoded = jwt.verify(token, 'HEL');
      console.log(decoded);
      
      req.userID = decoded.id

      let userCheck = await USER.findById(decoded.id)
      if(!userCheck){
        throw new Error("User not found")
      }
      next()
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}


exports.userSingup = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let usercreate = await USER.create(req.body)
        var token = jwt.sign({ id: usercreate._id  }, 'HEL');

        res.status(201).json({
            status : 'success',
            message : "User Create Successfull",
            usercreate,
            token,
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}

exports.userLogin = async function(req, res, next) {
    try {
        let userCheck = await USER.findOne({email : req.body.email})
        if(!userCheck){
            throw new Error("User Not Found")
        }
        let passwordVerify = await bcrypt.compare(req.body.password ,userCheck.password)
        if(!passwordVerify){
            throw new Error("Password Invaild")
        }
        res.status(201).json({
            status : 'success',
            message : "User Login Successfull",
            userCheck
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

exports.AllUserData = async function(req, res, next) {
    try {
        let userfind = await USER.find()
        res.status(201).json({
            status : 'success',
            message : "User All Data Find Successfull",
            userfind
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}

exports.updataUser = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let userUpdata = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status : 'success',
            message : "User Updata Successfull",
            userUpdata
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : message.error
        })
    }
}
let HEALTHDATA = require('../model/healthdata')

exports.AddHealthData = async function(req, res, next){
    try {
        req.body.userID = req.userID

        let dataAdd = await HEALTHDATA.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Add Health Data SuccessFull",
            dataAdd
        })
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : message.error
        })
    }
}

exports.ViewHealthData = async function(req, res, next){
    try {
        let findData = await HEALTHDATA.find({userID : req.userID}).populate('userID')
        res.status(201).json({
            status : 'success',
            message : "View Health Data SuccessFull",
            findData
        })
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : message.error
        })
    }
}

exports.DeleteHealthData = async function(req, res, next){
    try {
        await HEALTHDATA.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : "Delete Health Data SuccessFull",
        })
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : message.error
        })
    }
}

exports.UpdataHealthData = async function(req, res, next){
    try {
        let updata = await HEALTHDATA.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(201).json({
            status : 'success',
            message : "Delete Health Data SuccessFull",
            updata
        })
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : message.error
        })
    }
}
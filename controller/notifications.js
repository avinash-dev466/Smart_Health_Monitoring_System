let NOTIFICATIONS = require('../model/notifications')

exports.AddNotifications = async function(req, res, next){
    try {
        let notificationsAdd = await NOTIFICATIONS.create(req.body)
        // console.log(dataAdd);
        res.status(201).json({
            status : 'success',
            message : "Add Notifications SuccessFull",
            notificationsAdd
        })
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : message.error
        })
    }
}

exports.ViewNotifications = async function(req, res, next){
    try {
        let findData = await NOTIFICATIONS.find()
        res.status(201).json({
            status : 'success',
            message : "View Notifications SuccessFull",
            findData
        })
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : message.error
        })
    }
}
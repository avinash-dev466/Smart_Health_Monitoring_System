let REPORTS = require('../model/reports')

exports.GenerateHealthReports = async function(req, res, next){
    try {
        req.body.ReportsImage = req.file.filename
        let generateReport = await REPORTS.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Generate Health Reports SuccessFull",
            generateReport
        })
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : message.error
        })
    }
}

exports.ViewHistoricalReports = async function(req, res, next){
    try {
        let findReports = await REPORTS.find()
        res.status(201).json({
            status : 'success',
            message : "View Historical Reports SuccessFull",
            findReports
        })
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : message.error
        })
    }
}
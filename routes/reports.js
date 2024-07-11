var express = require('express');
let reportsController = require('../controller/reports')
var router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/Reports')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/GenerateReports',upload.single('ReportsImage'), reportsController.GenerateHealthReports);
router.get('/', reportsController.ViewHistoricalReports);

module.exports = router;

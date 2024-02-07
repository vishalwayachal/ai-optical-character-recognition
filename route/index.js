const router = require('express').Router()
const { detectText } = require('../controller')
const { validateNewDetection } = require('../middleware')

router.get("/", function (req, res) { res.status(200).json({ status: "success" }); });
router.post('/detection', validateNewDetection, detectText)
module.exports = router

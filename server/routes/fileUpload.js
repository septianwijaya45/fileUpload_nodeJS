const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController.js')

router.get('/', fileController.index);
router.post('', fileController.post);

module.exports = router;
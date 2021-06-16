var express = require('express');
var router = express.Router();

var personController = require('../controllers/personController');


router.get('/allPersons', personController.findAll);
router.delete('/delete/:id', personController.delete);

module.exports = router;
var express = require('express');
var router = express.Router();

var customersController = require('../controllers/customersController.js'); //pede os controladores

/* todos os users */
router.get('/', customersController.allUsers);

//Cria um user pelo body
router.post('/', customersController.createUser);

//Da delete de um user por params
router.delete('/:customerNumber', customersController.deleteUser);

// /* o users por ID e params*/
router.get('/:customerNumber', customersController.userId);

// e. Selecionar uma determinada encomenda referente a um determinado cliente. Caso não exista, o
// erro deverá ser tratado de forma adequada (2 valores).
router.get('/:cid/orders/:oid', customersController.singleOrder)

router.get('/log', function(request, res) {
    res.download(__dirname + "/log.txt")
})

module.exports = router;
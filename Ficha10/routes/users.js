var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController.js');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


/* CRUDDDDD */
/* todos os users */
router.get('/allUsers', authenticateTokenFromSession, userController.allUsers);

/* inserir um user */
router.post('/putUser', userController.putUser);

/* dar delete de  um user por id/params */
router.delete('/userDeleter/:id', userController.userDeleter);

/* buscar um user por ID/params */
router.get('/userId/:id', authenticateTokenFromSession, userController.userId);

/* da update a um user por ID/params */
router.put('/userPost/:id', userController.userPost);

function authenticateTokenFromSession(req, res, next) {
    const token = req.session.token;
    if (token == null) {
        //return res.sendStatus(401); 
        req.flash('loginMessage', 'You need to be logged in to acess that information!');
        res.redirect('/login'); //se nao tiver logado manda para a pagina de login
    } else {
        jwt.verify(token, process.env.TOKEN_SECRET, function(err, user) {
            if (err) {
                return res.sendStatus(403);
            }
            // TOKEN é valido e segue no layer
            next();
        });
    }
}


module.exports = router;
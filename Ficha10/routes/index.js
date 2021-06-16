var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController.js');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* fazer login */
router.post('/login', indexController.login);

router.get('/login', function(req, res, next) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
});

// fazer logout;
router.get('/logout', indexController.logout);

/* fazer signup */
router.post('/signup', indexController.signup);
router.get('/signup', function(req, res, next) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
});

/* profile */
router.get('/profile', authenticateTokenFromSession, function(req, res) {
    res.render('profile.ejs', {
        user: req.session.user
    });
});

/* ir para pagina protegida */
router.get('/protected', authenticateTokenFromSession, function(req, res) {
    res.render('protected.ejs', {
        user: req.session.user
    });
});

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
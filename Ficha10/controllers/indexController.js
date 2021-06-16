const User = require('../sequelize').User;
var jwt = require('jsonwebtoken');


function generateAcessToken(email, password) {
    var token = jwt.sign({ email, password }, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    return token;
}

exports.logout = function(req, res) {

    //console.log(req.session)
    req.session.destroy();
    res.redirect('/')
}

exports.signup = function(req, res) {
    var { email } = req.body;
    var { password } = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result == null) {
            if (req.body.email.length == 0 || req.body.password.length == 0) { // para nao deixar introduzir um user vazio
                req.flash('signupMessage', 'Tem de introduzir email e password');
                res.redirect('/signup');
            } else {
                User.create({ 'email': email, 'password': password })
                    .then(user => {
                        req.session.user = user;
                        req.session.token = generateAcessToken(email, password);
                        res.redirect('/profile');
                    });
            }
        } else {
            req.flash('signupMessage', 'That e-mail is already taken.');
            res.redirect('/signup');
        }
    }).catch(function(err) {
        req.flash('signupMessage', err);
        res.redirect('/signup');
    });
}

exports.login = function(req, res) {
    var { email } = req.body;
    var { password } = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result == null) {
            res.render('login.ejs', req.flash('loginMessage', 'Account does not exist'));
        } else if (password != result.password) {
            req.flash('loginMessage', 'Wrong password');
            res.redirect('/login');
        } else {
            req.session.user = result.dataValues;
            //console.log(generateAcessToken(email, password))
            req.session.token = generateAcessToken(email, password);
            res.redirect('/profile');
        }
    }).catch(err => {
        req.flash('loginMessage', err);
        res.redirect('/login');
    });
}
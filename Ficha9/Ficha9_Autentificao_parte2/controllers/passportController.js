var LocalStrategy = require('passport-local').Strategy;

// expose this function to our app using module.exports
module.exports = function(passport) {

    //require user model
    const User = require('../sequelize').User;

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        // TODO Sequelize query to return the user from the DB
        User.findOne({
            where: {
                id: id
            }
        }).then(result => {
            //o donne basicamento sobe a camada
            done(null, result);
        }).catch(err => {
            done(err, null);
        });
    });

    // =========================================================================
    // TODO 1- LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({
                where: {
                    email: email
                }
            }).then(result => {
                if (result == null) {
                    User.create({ 'email': email, 'password': password })
                        .then(user => {
                            return done(null, user)
                        });
                } else {
                    return done(null, false, req.flash('signupMessage', 'That e-mail is already taken'));
                }
            }).catch(err => {
                return done(err, null);
            });
        }));
    // =========================================================================
    // TODO 2- LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form    
            User.findOne({
                where: {
                    email: email
                }
            }).then(result => {
                if (result == null) {
                    return done(null, false, { message: req.flash('loginMessage', 'No user found with that email') });
                } else if (password != result.password) {
                    return done(null, false, { message: req.flash('loginMessage', 'Incorrect password') });
                } else {
                    return done(null, result);
                }
            }).catch(err => {
                return done(err, null);
            });
        }));
};
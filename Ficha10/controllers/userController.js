const User = require('../sequelize').User;
var jwt = require('jsonwebtoken');

// /* apresentar todos os users */
// https://sequelize.org/v5/manual/querying.html <-
exports.allUsers = (req, res) => {
    User.findAll()
        .then(users => {
            res.json(users) //("All users:", JSON.stringify(users, null, 4));
        });
}

//insere um novo user introduzindo pelo postman {"email" : "jaunnn@lul.com","password" : "jaunnn"}
exports.putUser = (req, res) => {
    newEmail = req.body.email;
    newPw = req.body.password;
    User.findOne({
            where: { email: newEmail }
        })
        .then(user => {
            if (user == null) {
                User.update({
                        email: newEmail,
                        password: newPw
                    })
                    .then(newUser => {
                        res.json("Welcome: " + newUser.email);
                        console.log(newUser.email, newUser.password)
                    });
            } else if (!newEmail || !newPw) {
                res.status(400).send("Falta dados");
            } else {
                res.status(401).send("Utilizador já existe");
            }
        });
}

//procura por ID em todos e da delete nele pelo id
exports.userDeleter = (req, res) => {
    const id = req.params.id;
    User.findOne({
            where: { id: id }
        })
        .then(user => {
            if (user == null) {
                res.status(400).send("User não existe ou já foi apagado.") //400 Bad Request 
            } else {
                User.destroy({ where: { id: id } })
                    .then(user => {
                        res.json("Rows Deleted: " + user);
                    });
            }
        });
}


//procura por ID em todos
exports.userId = (req, res) => {
    const id = req.params.id;
    User.findAll({
            where: { id: id }
        })
        .then(user => {
            res.json(user);
        });
}

//atualizada por ID
exports.userPost = (req, res) => {
    const id = req.params.id;
    const newPw = req.body.password; // inserir pelo body no postman
    User.findOne({
            where: { id: id }
        })
        .then(atualiza => {
            //console.log(update.password)
            atualiza.update({
                    password: newPw // inserir pelo body no postman -> {"password" : "jaunnn"}
                        //password: 'adksadaldk' // inserir uma pass predf
                })
                .then(pw => {
                    res.json("New password is: " + pw.password);
                });
        })

}
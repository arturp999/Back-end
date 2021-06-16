const seq = require('../sequelize').seq;
const seqOrders = require('../sequelize').seqOrders;
const fs = require("fs"); //file system

function log(request, response) {
    var info = request.path + ", " + request.method + ", " + new Date() + "\n";
    fs.appendFileSync('log.txt', info); // ta a anexar ao ficheiro criado a informação que ta em cima
}

//procura todos os users
exports.allUsers = (req, res) => {
    log(req, res)
    seq.findAll()
        .then(users => {
            res.json(users)
        });
}

//procura por ID em todos por paramtro
exports.userId = (req, res) => {
    log(req, res)
    const customerNumber_id = req.params.customerNumber;
    seq.findOne({
            where: { customerNumber: customerNumber_id }
        })
        .then(user => {
            if (user == null) {
                res.status(404).send("Esse ID não existe ou foi apagado.")
            } else {
                res.json(user);
            }
        });
}

//Cria um user recebendo a info pelo body
exports.createUser = (req, res) => {
    log(req, res)
    newCustomerName = req.body.customerName;
    newContactLastName = req.body.contactLastName;
    contactFirstName = req.body.contactFirstName;
    phone = req.body.phone
    addressLine1 = req.body.addressLine1;
    addressLine2 = req.body.addressLine2;
    city = req.body.city;
    state = req.body.state;
    postalCode = req.body.postalCode;
    country = req.body.country;
    creditLimit = req.body.creditLimit;

    seq.findOne({
            where: { customerNumber: newCustomerName }
        })
        .then(user => {
            if (!newCustomerName || !newContactLastName || !contactFirstName || !phone || !addressLine1 || !addressLine2 || !city || !state || !postalCode || !country || !creditLimit) {
                res.status(400).send("Falta informação")
            } else if (user == null) {
                seq.create({
                        customerName: newCustomerName,
                        contactLastName: newContactLastName,
                        contactFirstName: contactFirstName,
                        phone: phone,
                        addressLine1: addressLine1,
                        addressLine2: addressLine2,
                        city: city,
                        state: state,
                        postalCode: postalCode,
                        country: country,
                        creditLimit: creditLimit
                    })
                    .then(newUser => {
                        res.json("Welcome: " + newUser.customerNumber);
                    });
            } else {
                res.status(403).send("Utilizador já existe");
            }
        });
}

// Delete user por parametros
exports.deleteUser = (req, res) => {
    log(req, res)
    const customerNumber_id = req.params.customerNumber;
    seq.findOne({
            where: { customerNumber: customerNumber_id }
        })
        .then(user => {
            if (user == null) {
                res.status(404).send("O user não existe ou já foi eliminado")
            } else {
                seq.destroy({ where: { customerNumber: customerNumber_id } })
                    .then(user => {
                        res.json("Rows Deleted: " + user);
                    });
            }
        })
}


exports.singleOrder = (req, res) => {
    log(req, res)
    console.log(seqOrders);
    const customerNumber_id = req.params.customerNumber;
    const orderNumber = req.params.orderNumber
    seq.findOne({
            where: { customerNumber: customerNumber_id },
            include: {
                model: seqOrders,
                where: { orderNumber: orderNumber },
                required: true,
            },
        }, )
        .then(user => {
            if (user == null) {
                res.status(404).send("Esse ID não existe ou foi apagado.")
            } else {
                res.json(user);
            }
        });
}
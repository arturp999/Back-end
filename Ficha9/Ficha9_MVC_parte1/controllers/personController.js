// include our model
const Person = require('../sequelize').Person;


exports.findAll = (req, res) => {
    Person.findAll()
        .then(persons => {
            res.json(persons);
        });
}

exports.delete = (req, res) => {
    var id = req.params.id;
    Person.findOne({
            where: { id: id }
        })
        .then(person => {
            if (person == null) {
                res.status(404).send("O user não existe ou já foi eliminado")
            } else {
                Person.destroy({
                        where: { id: id }
                    })
                    .then(user => {
                        res.json("Rows Deleted: " + user);
                    });
            }
        })
}
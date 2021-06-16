const express = require('express');
const bodyParser = require('body-parser'); //faz com que o programa receber info
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening")
})

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

app.get('/', function(req, res) {
    res.send("root");
});

app.get('/persons', function(req, res) { //envia todas as pessoas do array
    connection.query("SELECT * FROM persons", function(err, results, fields) { //comando de SQL 
        if (err) throw err;
        res.send(results);
    });
});

app.put('/persons', function(req, res) { //envia todas as pessoas do array
    var person = req.body; // <- recebe para a variavel
    connection.query('INSERT INTO persons SET ?', person, function(err, results, fields) { //comando de SQL introduzindo info no sql
        if (err) throw err;
        res.send("O id inserido foi: " + results.insertId);
    });
});

// app.delete('/persons', function(req, res) { //quando damos delete diz o tudo sobre o gajo que levou delete
//     var personDelete = req.body.id; //dar delete no campo ID
//     var sql = "SELECT * FROM persons WHERE id =" + req.body.id;
//     connection.query(sql, function(err, results, fields) {
//         if (err) throw err;
//         if (Object.keys(results).length == 0) {
//             res.send("Person doesnt exist")
//         } else {
//             var person = results[0];
//             connection.query('DELETE FROM persons WHERE id = ?', personDelete, function(err, results, fields) { //comando de SQL introduzindo info no sql
//                 if (err) throw err;
//                 res.json(person);
//             });
//         }
//     });
// })

app.delete('/persons', function(req, res) { //envia todas as pessoas do array
    var personDelete = req.body.id; // <- recebe para a variavel
    connection.query('DELETE FROM persons WHERE id = ?', personDelete, function(err, results, fields) { //comando de SQL introduzindo info no sql
        if (err) throw err;
        res.send("Affected rows: " + results.affectedRows);
    });
});

app.delete('/persons/:id', function(req, res) { //apaga as pessoas pelo endpoint(ID)
    var personDelete = req.params.id; // <- da delete pelo parametro em vez de pedir pelo body
    connection.query('DELETE FROM persons WHERE id = ?', personDelete, function(err, results, fields) { //comando de SQL introduzindo info no sql
        if (err) throw err;
        res.send("Affected rows: " + results.affectedRows);
    });
});

app.get("/persons/:id", function(req, res) {
    var id = req.params.id;
    connection.query("SELECT * FROM persons WHERE id = ?", id, function(err, results, fields) { //comando de SQL introduzindo info no sql
        if (err) throw err;
        res.send(results);
    });
});

app.get('/persons/:age/:profession', function(req, res) {
    var age = req.params.age;
    var profession = req.params.profession;
    connection.query('SELECT * FROM persons WHERE age = ? AND profession = ?', [age, profession], function(err, results, fields) { //comando de SQL introduzindo info no sql
        if (err) throw err;
        res.send(results);
    });
});

app.post("/persons/:id", function(req, res) {
    var id = req.params.id;
    var details = req.body;
    connection.query('UPDATE persons set ? WHERE id = ?', [details, id], function(err, results, fields) { //comando de SQL introduzindo info no sql
        if (err) throw err;
        res.send("Changed:" + results.changedRows);
    });
});
 var config = require("./config");
 //require do modulo emitter
 var Emitter = require("./emitter");
 //criação da classe emitter
 var emtr = new Emitter();
 // registar o listener para o evento LOGIN
 var emtr = new Emitter();

 emtr.on(config.LOGIN, function() {
     console.log("Welcome user");
 });

 emtr.on(config.LOGOUT, function() {
     console.log("bye bye");
 });

 //invocar o listener para o evento LOGIN
 emtr.emit(config.LOGIN)

 emtr.emit(config.LOGOUT)


 //objeto vazio
 var person = {
     name: "Artur",
     age: 24,
     gender: "M",
 };

 var string_json = JSON.stringify(person);
 // console.log(string_json);

 var str = JSON.parse('{"name":"Artur","age":24,"gender":"M"}');
 // console.log("Name:" + " " + str.name);
 // console.log("Name:" + " " + str.age);
 // console.log("Name:" + " " + str.gender);
function Person(firstName, lastName, email) { // <- CLASSE
    this.firstName = firstName; // <- ATRIBUTOS DA CLASSE
    this.lastName = lastName;
    this.email = email;
    name = firstName + " " + lastName;
};
//adicionar função ao prototype
Person.prototype.greet = function() {
    console.log("Suppp homie" + " " + this.firstName + " " + this.lastName + " " + this.age);
}

//adicionar atributo ao prototype
Person.prototype.age = 0;
var test = new Person("José", "Luis", "qualquercoisa@gmail.com");
test.age = 30
var test1 = new Person("Antonio", "Rodrigues", "randomemail@hotmail.com");
test1.age = 45

// test.greet();
// test1.greet();
// console.log(test.firstName, test.age)
// console.log(test1.firstName, test1.age)
// console.log(test.__proto__ == test1.__proto__)
// console.log(test.firstName == test1.firstName)

// Ficha que o prof deu termina aqui o resto é testes // Object Oriented JavaScript Tutorial














































// 05/04/2020 -> https://www.youtube.com/watch?v=4l3bTDlT6ZI&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=1

///outras cenas
var userOne = {
    email: 'random@hotmail.com',
    name: 'Artur',
    login() {
        console.log(this.email, ' has logged in');
    },
    logout() {
        console.log(this.email, ' has logged out');
    },
};
// userOne.login()


///mesma coisa mas com classes
class newPerson {
    constructor(email, nome) { //ta a construir um objeto
        this.email = email;
        this.nome = nome;
        this.score = 0; // faz com que todos os users estejam a 0
    }
    login() {
        console.log(this.email, ' has logged in');
        return this;
    }
    logout() {
        console.log(this.email, ' has logged out');
    }
    update() {
        this.score++;
        console.log(this.email, "score is now", this.score);
        if (this.score == 4) { //fiz com que a função quando chegar a 4 corra o logout
            this.logout()
        }
        return this
    }
};
var userUm = new newPerson('random@gmail.com', 'artur');
var userDois = new newPerson('asdasdsadsa@gmail.com', 'Jose');

// class Admin extends newPerson { //cria uma classe com as propriedadas da outra + o que definir
//     deleteUser(user) { //não preciso ter constrututor uma vez que vai buscar a cima
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }

var admin = new Admin('admin@gmail.com', 'Rodrigo'); //está a indicar que este novo user vai ser admin
var users = [userUm, userDois, admin];
// console.log(users);

// admin.deleteUser(userDois);
// console.log(users);


// console.log(userUm.login())
// console.log(userDois.logout())
//forma correta de dar print como têm uma função é so escrever o user + função
// userUm.login()
// userDois.logout()

// method chaining (em vez de chamar um de cada vez como em cima depois de fazer o primeiro corre o segundo)
// userUm.login().update().update().update().update();

//
var users = { test1, test }

function testing() {
    for (var elem in users) {
        console.log(users[elem].firstName + " " + users[elem].lastName + " " + users[elem].email);
    }
}
// testing()

//function já com constutor como o prof deu na ficha

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    // this.login = function() {
    //     console.log(this.email, ' has logged in');
    // }
}

var userOne = new User('email@hotmail.com', 'Matilde');
var userTwo = new User('mana@hotmail.com', 'Luisa');

//prototype, em vez de guardar no objeto, as instancias não têm prototype so o construtor

User.prototype.login = function() {
        this.online = true; //corre de qualquer maneira sem isto..
        console.log(this.email, ' has logged in');
    }
    // userTwo.login();

User.prototype.logout = function() {
        this.online = false; //corre de qualquer maneira sem isto..
        console.log(this.email, ' has logged out');
    }
    // userTwo.logout()

//Prototype Inheritance
function Admin(...args) {
    User.apply(this, args); //propriedadas antigas
    this.role = 'super admin'; // admin a ficar com novas propriedades
}
Admin.prototype = Object.create(User.prototype); //fica com as funções que já existia do user
Admin.prototype.deleteUser = function(u) { //criando nova função apenas para o admin
    users = users.filter(user => {
        return user.email != u.email
    })

};

var gm = new Admin('shaun@ninjas.com', 'Shaun');
var users = [userOne, userTwo, admin];

gm.deleteUser(userOne)
console.log(users);
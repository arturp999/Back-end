var array = [

];

array.push(
    function() {
        return "Hello World 1";
    },
    function() {
        return "2";
    },
    function(teste) {
        teste = 3;
        return teste;
    },
);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]());
}
// mesmo com o "teste" em cima ele da print de qualquer forma na função
console.log("                                            ")

array.forEach(element => {
    console.log(element())
});

// function fn() {
//     console.log("teste");
// }
// var ar = [];
// ar.push(fn);
// ar[0]();
//https://www.w3schools.com/js/js_array_sort.asp
//https://stackoverflow.com/questions/50415200/sort-an-array-of-arrays-in-javascript

var array = [
    [9, 14],
    [1, 3],
    [5, 7],
    [6, 8],
];
// console.log(array.sort(function(a, b) {
//     return a[0] - b[0], a[0] - b[0]; //define a posição
// }))
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < 2; j++) {
        if (array[i][j] == 7 || array[i][j] == 6) {
            array[i].splice(j, 1); //apaga index atual
        }
    }
}
array[2].push(array[3][0])
array.pop(array[3])
console.log(array.sort(function(a, b) {
    return a[0] - b[0], a[0] - b[0]; //define a posição
}))
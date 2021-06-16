var log = require("./Log");
// log.info();

function started() {
    console.log("Started Download");
}

function update(percentagem) {
    console.log(percentagem + " % of Download");
}

function completed() {
    console.log("Completed Download");
}

function performDownload(startedFn, updateFn, completedFn) {
    startedFn();
    for (let i = 0; i < 101; i++) {
        updateFn(i)
    }
    completedFn();
}
// performDownload(started, update, completed);

// #############################################################################
// #############################################################################
var array = [1, 2, 5, 3];

var arrayUtils = require("./ArrayUtils");
var empty = arrayUtils.isEmpty(array);
// console.log(empty);

var max = arrayUtils.max(array);
// console.log("Maximum value of array: " + max);

var index = arrayUtils.indexOf(array, 2);
// console.log("O index é " + index);

var subArray = arrayUtils.subArray(array, 0, 3)
    // console.log("O sub array é " + subArray);

var array1 = [1, 2, 5, 3];
var array2 = [6, 6, 6, 6];
var isSameLength = arrayUtils.isSameLength(array1, array2)
    // console.log("Arrays same length ?: " + isSameLength);

var inverted = arrayUtils.reverse(array);
// console.log("Array Inverted: " + inverted);

var swapped = arrayUtils.swap(array, 0, 1);
// console.log("Swapped array: " + swapped);

var contains = arrayUtils.contains(array, 100);
// console.log("Array contains value?: " + contains);

var concantenate = arrayUtils.concatenate(array1, array2);
// console.log("The two arrays together: " + concantenate);

arrayMEDIA = [2, 2, 5, 2, 2, 2]
var media = arrayUtils.media(arrayMEDIA);
// console.log("The average is: " + media);

arrayMinimal = [2, 4, 0, 5, -10, 8, 7, 1, -20]
var mini = arrayUtils.minimal(arrayMinimal);
console.log("The minimal number is: " + mini);
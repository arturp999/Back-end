var arrayUtils = {
    isEmpty: function(array) {
        if (array.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    max: function(array) {
        var maxValue = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= maxValue) {
                maxValue = array[i];
            }

        }
        return maxValue;
    },
    indexOf: function(array, value) {
        var index = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                index = i;
            }
        }
        return index;
    },
    subArray: function(array, startIndex, endIndex) {
        var subArray = [];
        for (let i = startIndex; i <= endIndex; i++) {
            subArray.push(array[i]);
        }
        return subArray;
    },
    isSameLength: function(array1, array2) {
        if (array1.length == array2.length) {
            return true;
        } else {
            return false;
        }
    },
    reverse: function(array) {
        var inverted = [];
        for (let i = array.length - 1; i >= 0; i--) {
            inverted.push(array[i]);
        }
        return inverted
    },
    swap: function(array, index1, index2) {
        var guarda = array[index1]; //Save the value on the index1 because he will be deleted after getting the value of the index2
        array[index1] = array[index2]; //Set index1 to index2
        array[index2] = guarda; //Set index2 value to guarda that will be the index1
        return array;
    },
    contains: function(array, value) {
        if (this.isEmpty(array)) {
            return "ERRO!";
        } else {
            return this.indexOf(array, value) != -1;
        }
    },
    concatenate: function(array1, array2) {
        var arrayConc = [];
        arrayConc.push(array1, array2);
        return arrayConc
    },
    media: function(arrayMEDIA) {
        var count = 0;
        var soma = 0
        for (let i = 0; i < arrayMEDIA.length; i++) {
            soma = arrayMEDIA[i] + soma
            count += 1
            var media = soma / count
        }
        return media
    },
    minimal: function(arrayMinimal) {
        minimo = arrayMinimal[0];
        for (let i = 0; i < arrayMinimal.length; i++) {
            if (arrayMinimal[i] <= minimo) {
                minimo = arrayMinimal[i]
            }
        }
        return minimo
    },
};

module.exports = arrayUtils

// max: function(array) {
//     var maxValue = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= maxValue) {
//             maxValue = array[i];
//         }

//     }
//     return maxValue;
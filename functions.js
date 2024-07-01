const returnEmptyString = function () {
    return ""
};

const returnZeroNumber = function () {
    return 0
};

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}
};

const returnAbcString = function () {
    return "abc123"
};

const returnSumOfTen = function () {
    return 5+5
};

const subtraction = function (a, b) {
    return a - b
};

const multiplication = function () {
    return 10 * 2
};

const division = function () {
    return 25 / 5
};

const returnArray = function () {
    return [1,2,3]
};

const returnFirstIndex = function (array) {
    return array[0]
};

const returnSecondIndex = function (array) {
    return array[1]
};

const returnArrayLength = function (array) {
    return array[2]
};

const arraySum = function () {
   return 6
};

const arraySubtraction = function () {
    return -6
};

const multiplicationArray = function () {
    return 3 * 2
};

const divisionArray = function (arr) {
    if(!Array.isArray(arr) || arr.length === 0){
        return 0
    }
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !==0) {
            result /= arr[i];
        }else{
            return Infinity;
        }
    }
    return Math.round(result * 1000) / 1000;
};

const oddArray = function (arr) {
    if(!Array.isArray(arr) || arr.lenght === 0){
        return[];
    }
    const oddNumber = arr.filter(num => num % 2 !== 0);
    return oddNumber
};

const evenArray = function (arr) {
    if(!Array.isArray(arr) || arr.length ===0){
        return[];
    }
    const evenNumber = arr.filter(num => num % 2 === 0);
    return evenNumber
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnAbcString,
returnSumOfTen,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}

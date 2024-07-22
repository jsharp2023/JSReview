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

const returnSumOfTen = function (a, b) {
    return a + b
};

const subtraction = function (a, b) {
    return a - b
};

const multiplication = function (a, b) {
    return a * b
};

const division = function (a, b) {
    if (b !== 0) {
        return a / b
    }else{
        return Infinity // or some other error handling
    }
};

const returnArray = function (arr) {
    return arr
};

const returnFirstIndex = function (array) {
    return array[0]
};

const returnSecondIndex = function (array) {
    return array[1]
};

const returnArrayLength = function (array) {
    return array.length
};

const arraySum = function (arr) {
  if (!Array.isArray(arr) || arr.length === 0){
    return 0
  }
  return arr.reduce((sum, num)=> sum + num, 0)
};

const arraySubtraction = function (arr) {
    if ( !Array.isArray(arr) || arr.length === 0){
        return 0
    }
    return arr.reduce((difference, num) => difference - num, 0)
};


const multiplicationArray = function (arr) {
    if (!Array.isArray(arr)|| arr.length === 0){
        return 1
    }
    return arr.reduce((product, num)=> product * num, 1)
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

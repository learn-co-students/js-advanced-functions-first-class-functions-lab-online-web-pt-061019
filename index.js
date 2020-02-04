// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(array.length - 2)
}

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
]

function createFareMultiplier(i){
    return function multiply(fare){
        return i * fare;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(array, selectingDrivers){
    return selectingDrivers(array);
}
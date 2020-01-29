// Code your solution in this file!

const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2)
}
// .slice()
// provide two arguments to .slice(), the index where the slice should begin and the index before which it should end

// If no second argument is provided, the slice will run from the index specified by the first argument to the end of the Array:
const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2)
}

// closure: is a function having access to the parent scope, even after the parent function has closed. It makes it possible for a function to have "private" variables.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// scope chain which allows functions defined in functions to access all their parent scopes' variables
// higher-order function
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer
    }
}

// const fareDoubler = function(fareX2) {
//     return createFareMultiplier(2)(fareX2)
// }
const fareDoubler = createFareMultiplier(2)

// const fareTripler = function(fareX3) {
//     return createFareMultiplier(3)(fareX3)
// }
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driversArray, fn) {
    return fn(driversArray)
}
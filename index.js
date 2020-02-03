// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
 // return array.slice(0,1)
 // return [array[0], array[1]]
 return array.slice(0, 2)
}

// returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function.
// The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.


const returnLastTwoDrivers = function(array) {
 // return array.slice(0,1)
 // let i = array.length - 1
 // return [array[i-1], array[i]]
 return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
  return function(fare) {
    return fare * integer
  }

  return innerFunction
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// const fareDoubler = function(integer) {
//   return createFareMultiplier(integer)
// }

// const fareTripler = function() {
//
// }

const selectDifferentDrivers = function(arrayOfDrivers, pickDrivers) {
  return pickDrivers(arrayOfDrivers)
}

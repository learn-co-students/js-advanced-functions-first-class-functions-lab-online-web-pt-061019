// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return [arr[0], arr[1]];
}

const returnLastTwoDrivers = function(arr) {
  return [arr[arr.length - 2], arr[arr.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i) {
  return function(fare) {
    return fare * i;
  }
}

const fareDoubler = createFareMultiplier(2);
// const fareDoubler = createFareMultiplier(2)(fare);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, fn) {
  return fn(arr);
}

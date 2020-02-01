// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArr){
  return driverArr.slice(0, 2);
}

const returnLastTwoDrivers = function(driverArr){
  return driverArr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int){
  return function(fare){
    return fare * int;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driverArr, fn){
    return fn(driverArr);
}
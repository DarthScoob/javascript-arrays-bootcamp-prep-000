var chocolateBars = ["snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"];
  
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, Payday){
  chocolateBars.unshift(Payday);
  return Payday;
}

function addElementToEndOfArray(chocolateBars, Payday){
  return [...chocolateBars, Payday];
}

function destructivelyAddElementToEndOfArray(chocolateBars, Payday){
  chocolateBars.push(Payday);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
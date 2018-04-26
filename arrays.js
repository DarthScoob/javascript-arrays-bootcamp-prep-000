var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'];

function addElementToBeginningOfArray(chocolateBars, element) {
  return [element, ...chocolateBars];
}
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars
}
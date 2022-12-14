"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary, cloneObject, assignment }; //add all of your function names here that you need for the node mocha tests

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function assignment({ name, years, isAdmin = false }) {

  return `${name}+${years}+${isAdmin}`;
}
function topSalary(obj) {
  let highSalaryArr = [0, 0];
  if (Object.entries(obj).length > 0) {
    for (let [key, value] of Object.entries(obj)) {
      if ([value] > highSalaryArr[1]) {
        highSalaryArr = [key, value];
      }
    }
    return highSalaryArr[0];
  } else {
    return null;
  }
}
function cloneObject(obj) {
  let jsonObject = JSON.stringify(obj);
  let newObject = JSON.parse(jsonObject);
  console.log(newObject);
  return newObject === obj;
}
//
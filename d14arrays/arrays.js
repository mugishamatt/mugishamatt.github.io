"use strict";
//You need the module.exports when testing in node.  Comment it out when you send your file to the browser
module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply,
    findLongestWord:findLongestWord,reverseArray:reverseArray ,reverseArrayInPlace:reverseArrayInPlace}; //add all of your function names here that you need for the node mocha tests

/**
//  
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
  if (a > b&&a>c) {
    return a;
 
  } else if(b>c){
    return b;
  }else{
    return c;
  }
}
console.log(maxOfThree(10, 30, 20));
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
  let tot = 0;
  for (const number of arr) {
    tot += number;
  }
  return tot;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for(let num of arr){
    tot*=num
    }
  return tot;
}

/**
 * 
 * @param {Array} array of words
 */

function findLongestWord(array) {
        let word = "";
        for (let i = 0; i < array.length; i++) {
          if (array[i].length>word.length) {
            word = array[i];
          }
        }
        return word.length;
}
    let arr=["this", "is", "a", "test", "longest"];

      console.log(findLongestWord(arr))
//

    /**
 * 
 * @param {array} arr - array of elements
 * @returns {array} - new array which is arr reversed
 */
function reverseArray(arr) {
    let newArray = [];
    for (let element of arr) {
        newArray.unshift(element);
    }
    return newArray;
}
/**
 * 
 * @param {array} arr - array of elements 
 * @returns {array} - original array reversed
 */
 function reverseArrayInPlace(arr) {
    let newArray = [];
    for (let element of arr) {
        newArray.unshift(element);
    }
    arr = newArray;
    return arr;
}


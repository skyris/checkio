/*
"Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.
You should write a function that will receive a positive integer and return:
"Fizz Buzz" if the number is divisible by 3 and by 5;
"Fizz" if the number is divisible by 3;
"Buzz" if the number is divisible by 5;
The number as a string for other cases.
Input: A number as an integer.
Output: The answer as a string.
Precondition: 0 < number ≤ 1000
*/

"use strict";

function fizzBuzz(data) {
    var ans;
    if (data % 3 == 0 && data % 5 == 0) {
        ans = "Fizz Buzz";
    } else if (data % 3 == 0) {
        ans = "Fizz";    
    } else if (data % 5 == 0) {
        ans = "Buzz";
    } else {
        ans = "" + data;   
    }  
    return ans;        
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
    assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
    assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
    assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

"use strict";


function absoluteSorting(numbers){
    var temp;
    for (var passnum = numbers.length; passnum > 0; passnum--) {
        for (var i = 1; i < passnum; i++) {
            if (Math.abs(numbers[i]) < Math.abs(numbers[i - 1])) {
                temp = numbers[i - 1];
                numbers[i - 1] = numbers[i];
                numbers[i] = temp;
            }
        }
    }
    return numbers
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20], "Example");
    assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3], "Positive numbers");
    assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3], "Negative numbers");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
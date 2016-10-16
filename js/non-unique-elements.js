"use strict";

function nonUniqueElements(data) {
    var dict = {};
    var new_data = [];
    for (var i = 0; i < data.length; i++) {
        if (dict[data[i]] != undefined) {
            dict[data[i]] += 1;
        } else {
            dict[data[i]] = 1;
        }
    }
    for (i = 0; i < data.length; i++) {
        if (dict[data[i]] > 1) {
            new_data.push(data[i]);
        }
    }
    return new_data;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

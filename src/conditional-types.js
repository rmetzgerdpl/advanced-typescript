"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleFlatten = exports.exampleConditional = exports.exampleUnion = exports.exampleExtends = void 0;
var character_data_1 = require("./data/character-data");
var equipment_data_1 = require("./data/equipment-data");
//#region Example extends
function exampleExtends() {
    var character = character_data_1.Frodo;
    levelUp(character);
    var sword = equipment_data_1.BroadSword;
    // levelUp(sword); //Does not work
    var elevator = {
        id: 42,
        name: 'elevator',
        level: 15
    };
    // levelUp(elevator); //TODO Will this work?
}
exports.exampleExtends = exampleExtends;
function levelUp(character) {
    character.level++;
    console.log("".concat(character.name, " is now level ").concat(character.level, "!"));
}
//#endregion
//#region Example union
function exampleUnion() {
    var stringValue = increment('4');
    console.log("".concat(stringValue, " has a length of ").concat(stringValue.length));
    var numericValue = increment(4.5);
    console.log("".concat(numericValue, " as an exponent ").concat(numericValue.toExponential()));
    //TODO Notice the return type is the same value being passed in
}
exports.exampleUnion = exampleUnion;
function increment(value) {
    if (typeof value === 'string') {
        value = "".concat(parseInt(value, 10) + 1);
    }
    else if (typeof value === 'number') {
        value++;
    }
    return value;
}
function exampleConditional() {
    var stringValue = incrementResult('4');
    console.log("".concat(stringValue, " has a length of ").concat(stringValue.length));
    var numericValue = incrementResult(4.5);
    console.log("".concat(numericValue, " as an exponent ").concat(numericValue.toExponential()));
}
exports.exampleConditional = exampleConditional;
function incrementResult(value) {
    if (typeof value === 'string') {
        value = "".concat(parseInt(value, 10) + 1);
    }
    else if (typeof value === 'number') {
        value++;
    }
    return value;
}
function exampleFlatten() {
    iterate(new Date(), function (value) { return console.log("Today is: ".concat(value.toDateString())); });
    iterate(['Cats', 'Dogs', 'Pigs'], function (value) { return console.log(value); });
    var map = new Map()
        .set('1', 1)
        .set('2', 2)
        .set('3', 3);
    iterate(map, function (value) { return console.log(value); });
}
exports.exampleFlatten = exampleFlatten;
function iterate(values, onValue) {
    if (Array.isArray(values)) {
        values.forEach(function (value) { return onValue(value); });
    }
    else if (values instanceof Map) {
        Array.from(values.values()).forEach(function (value) { return onValue(value); });
    }
    else {
        onValue(values);
    }
}
//#endregion

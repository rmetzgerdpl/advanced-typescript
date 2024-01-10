"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleConditionalTransform = exports.exampleTransform = exports.exampleProperty = exports.exampleForEach = exports.exampleKeyof = void 0;
//#region key of
function exampleKeyof() {
    var stats = {
        strength: 17,
        dexterity: 8,
        constitution: 15,
        intellegence: 12,
        wisdom: 12,
        charisma: 10
    };
    incrementStat(stats, 'strength');
    console.log(stats);
}
exports.exampleKeyof = exampleKeyof;
function incrementStat(stats, statType) {
    stats[statType]++;
}
//#endregion
//#region keyof foreach
function exampleForEach() {
    var stats = {
        strength: 17,
        dexterity: 8,
        constitution: 15,
        intellegence: 12,
        wisdom: 12,
        charisma: 10
    };
    Object.keys(stats).forEach(function (key) { return console.log(key); });
    //This won't compile...
    // Object.keys(stats).forEach(key => console.log(stats[key]));
    // What are we doing below that we aren't doing in the line above?
    Object.keys(stats).forEach(function (key) { return console.log(stats[key]); });
}
exports.exampleForEach = exampleForEach;
function exampleProperty() {
    var stats = {
        strength: 17,
        dexterity: 8,
        constitution: 15,
        intellegence: 12,
        wisdom: 12,
        charisma: 10
    };
    logObject(stats, { charisma: true, dexterity: false, wisdom: true, });
}
exports.exampleProperty = exampleProperty;
function logObject(value, printKeys) {
    Object.keys(printKeys)
        .filter(function (key) { return printKeys[key]; }) // filters where value of pair is true
        .forEach(function (key) { return console.log("".concat(key, ": ").concat(value[key])); }); // grabs value of pair
}
function exampleTransform() {
    var stats = {
        strength: 17,
        dexterity: 8,
        constitution: 15,
        intellegence: 12,
        wisdom: 12,
        charisma: 10
    };
    logObject2(stats, { charisma: true, wisdom: true });
}
exports.exampleTransform = exampleTransform;
function logObject2(value, printKeys) {
    Object.keys(printKeys)
        .filter(function (key) { return printKeys[key]; })
        .forEach(function (key) { return console.log("".concat(key, ": ").concat(value[key])); });
}
function exampleConditionalTransform() {
    var stats = {
        strength: 17,
        dexterity: 8,
        constitution: 15,
        intellegence: 12,
        wisdom: 12,
        charisma: 10,
        name: 'Aragorn'
    };
    logNumbers(stats, { constitution: true });
}
exports.exampleConditionalTransform = exampleConditionalTransform;
function logNumbers(value, printKeys) {
    Object.keys(printKeys)
        .filter(function (key) { return printKeys[key]; })
        .forEach(function (key) { return console.log("".concat(key, ": ").concat(value[key])); });
}
//#endregion

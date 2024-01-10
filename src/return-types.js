"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleNever = exports.exampleUndefined = exports.exampleVoid = void 0;
var character_data_1 = require("./data/character-data");
//#region Example returning void
function exampleVoid() {
    var logReturn = logValue('log me');
    console.log("log return: ".concat(logReturn));
}
exports.exampleVoid = exampleVoid;
function logValue(value) {
    console.log(value);
    //TODO Try uncommenting this
    // return '';
}
//#endregion
//#region Example returning undefined
function exampleUndefined() {
    var character = getCharacter(2);
    //TODO Try writting a property of user instead of the user object (ex: user.firstName)
    console.log("user return ".concat(character === null || character === void 0 ? void 0 : character.name));
    console.log("user return ".concat(JSON.stringify(character)));
}
exports.exampleUndefined = exampleUndefined;
function getCharacter(id) {
    var data = new character_data_1.CharacterData();
    return data.get(id);
}
//#endregion
//#region Example returning never
function exampleNever() {
    try {
        var errorReturn = throwError();
        console.log("never return ".concat(errorReturn));
    }
    catch (error) {
        console.error(error);
    }
}
exports.exampleNever = exampleNever;
function throwError() {
    //TODO Try commenting out this code
    throw new Error('This is a test error');
}
//#endregion
//#region notes
// In imperative languages, void can be thought of as a type containing a single value. 
// such languagues do nto provide a means to construct or consume this value, but a void function
// can be thought of as returning this trivial value.
// In contrast, never is a type containing no values, which means that a function with this 
// return type can never return normally at all. This means either throwing an exception
// or failing to terminate.
//#endregion

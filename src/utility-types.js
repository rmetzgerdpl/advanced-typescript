"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleReal = exports.examplePartial = exports.examplePick = exports.exampleOmit = void 0;
var character_data_1 = require("./data/character-data");
function exampleOmit() {
    writeOmitCharacter({
        name: 'Legolas',
        level: 10,
    });
    writeOmitCharacter(character_data_1.Gimli);
}
exports.exampleOmit = exampleOmit;
function writeOmitCharacter(character) {
    console.log("".concat(character.name, " level ").concat(character.level));
    console.log(JSON.stringify(character));
}
function examplePick() {
    writePickCharacter({
        name: 'Legolas',
        level: 10
    });
    writePickCharacter(character_data_1.Gimli);
}
exports.examplePick = examplePick;
function writePickCharacter(character) {
    console.log("".concat(character.name, " level ").concat(character.level));
    console.log(JSON.stringify(character));
}
function examplePartial() {
    writePartialCharacter({
        name: 'Sam',
        level: 9999
    });
}
exports.examplePartial = examplePartial;
function writePartialCharacter(character) {
    console.log("".concat(character.name, " level ").concat(character.level));
    console.log(JSON.stringify(character));
}
//#endregion
//#region Realistic example
function exampleReal() {
    //Example using Omit (see SqlData and CharacterData constructors)
    var characterData = new character_data_1.CharacterData();
    //Example using partial (see search method)
    var character = characterData.search({ level: 1 });
    //TODO What if we only want to allow searching by certain fields?
    console.log(characterData);
    console.log(character);
}
exports.exampleReal = exampleReal;
//#endregion

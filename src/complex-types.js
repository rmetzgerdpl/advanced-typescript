"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleUnion = exports.exampleDeepPartial = exports.examplePartial = void 0;
var character_data_1 = require("./data/character-data");
function examplePartial() {
    var gandalf = character_data_1.Gandalf;
    var nameEquals = equalsPartial(gandalf, {
        name: 'Gandalf'
    });
    console.log("By name: ".concat(nameEquals));
    var equipmentEquals = equalsPartial(gandalf, {
        equipment: [
            {
                name: 'Wizard Staff'
            }
        ]
    });
    console.log("By equipment: ".concat(equipmentEquals));
}
exports.examplePartial = examplePartial;
function equalsPartial(value1, value2) {
    if (value1 === value2) {
        return true;
    }
    if (value1 === undefined
        || value2 === undefined
        || typeof value1 !== 'object'
        || typeof value2 !== 'object') {
        return false;
    }
    var match = Object.keys(value2)
        .every(function (key) {
        return key in value1
            && equalsPartial(value1[key], value2[key]);
    });
    return match;
}
var bob3 = {
    name: 'Bob III',
    dad: {
        name: 'Bob II',
        dad: {
            name: 'Bob'
        }
    }
};
function exampleDeepPartial() {
    var sameGrandparent = equalsPartial(bob3, { dad: { dad: { name: 'Bob' } } });
    console.log("Same grandparent: ".concat(sameGrandparent));
}
exports.exampleDeepPartial = exampleDeepPartial;
function exampleUnion() {
    var value1 = {
        firstName: 'Frodo',
        lastName: 'Baggins'
    };
    var value2 = {
        age: 3
    };
    var merged = merge(value1, value2);
    console.log(merged);
}
exports.exampleUnion = exampleUnion;
function merge() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return Object.assign.apply(Object, __spreadArray([{}], values, false));
}
//#endregion

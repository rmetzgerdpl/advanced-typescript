"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gimli = exports.Sam = exports.Frodo = exports.Boromir = exports.Gandalf = exports.CharacterData = void 0;
var equipment_data_1 = require("./equipment-data");
var sql_data_1 = require("./sql-data");
var CharacterData = /** @class */ (function (_super) {
    __extends(CharacterData, _super);
    function CharacterData(options) {
        var _a;
        return _super.call(this, {
            select: CharacterData.SELECT,
            insert: CharacterData.INSERT,
            update: CharacterData.UPDATE,
            delete: CharacterData.DELETE,
            seedData: (_a = options === null || options === void 0 ? void 0 : options.seedData) !== null && _a !== void 0 ? _a : getDefaultSeedData()
        }) || this;
    }
    CharacterData.SELECT = 'select * from characters';
    CharacterData.INSERT = 'insert into characters(name) values(?)';
    CharacterData.UPDATE = 'update characters set name = ? where id = ?';
    CharacterData.DELETE = 'delete from users where id = ?';
    return CharacterData;
}(sql_data_1.SqlData));
exports.CharacterData = CharacterData;
exports.Gandalf = {
    id: 1,
    name: 'Gandalf',
    level: 9,
    equipment: [
        equipment_data_1.WizardStaff,
        equipment_data_1.BroadSword
    ]
};
exports.Boromir = {
    id: 2,
    name: 'Boromir',
    level: 5,
    equipment: [
        equipment_data_1.BroadSword
    ]
};
exports.Frodo = {
    id: 3,
    name: 'Frodo',
    level: 1,
    equipment: [
        equipment_data_1.BroadSword,
        equipment_data_1.MithralVest
    ]
};
exports.Sam = {
    id: 4,
    name: 'Sam',
    level: 1,
    equipment: [
        equipment_data_1.BroadSword,
        equipment_data_1.FryingPan
    ]
};
exports.Gimli = {
    id: 5,
    name: 'Gimli',
    level: 7,
    equipment: [
        equipment_data_1.Axe
    ]
};
function getDefaultSeedData() {
    return [exports.Gandalf, exports.Boromir, exports.Frodo, exports.Sam, exports.Gimli];
}

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
exports.Axe = exports.FryingPan = exports.MithralVest = exports.BroadSword = exports.WizardStaff = exports.EquipmentData = void 0;
var sql_data_1 = require("./sql-data");
var EquipmentData = /** @class */ (function (_super) {
    __extends(EquipmentData, _super);
    function EquipmentData(options) {
        var _a;
        return _super.call(this, {
            select: EquipmentData.SELECT,
            insert: EquipmentData.INSERT,
            update: EquipmentData.UPDATE,
            delete: EquipmentData.DELETE,
            seedData: (_a = options === null || options === void 0 ? void 0 : options.seedData) !== null && _a !== void 0 ? _a : getDefaultSeedData()
        }) || this;
    }
    EquipmentData.SELECT = 'select * from equipment';
    EquipmentData.INSERT = 'insert into equipment(name) values(?)';
    EquipmentData.UPDATE = 'update characters set name = ? where id = ?';
    EquipmentData.DELETE = 'delete from equipment where id = ?';
    return EquipmentData;
}(sql_data_1.SqlData));
exports.EquipmentData = EquipmentData;
exports.WizardStaff = {
    id: 1,
    name: 'Wizard Staff'
};
exports.BroadSword = {
    id: 2,
    name: 'Broad Sword'
};
exports.MithralVest = {
    id: 3,
    name: 'Mithral Vest'
};
exports.FryingPan = {
    id: 4,
    name: 'Frying Pan'
};
exports.Axe = {
    id: 5,
    name: 'Axe'
};
function getDefaultSeedData() {
    return [exports.WizardStaff, exports.BroadSword, exports.MithralVest, exports.FryingPan, exports.Axe];
}

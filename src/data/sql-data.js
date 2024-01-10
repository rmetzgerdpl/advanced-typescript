"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlData = void 0;
var SqlData = /** @class */ (function () {
    function SqlData(options) {
        this.rows = [];
        if (options.seedData) {
            this.rows = options.seedData;
        }
    }
    SqlData.prototype.seed = function (rows) {
        this.rows = rows;
    };
    SqlData.prototype.search = function (search) {
        //FIXME Implement search
        return this.rows;
    };
    //FIXME Improve this test
    SqlData.prototype.get = function (id) {
        return this.rows.find(function (row) { return 'id' in row ? row.id === id : false; });
    };
    return SqlData;
}());
exports.SqlData = SqlData;
//export type Search<CharacterData> = Partial<CharacterData> & Pick<CharacterData, keyof CharacterData>;

"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var config_1 = require("../config/config");
var tsmvc_1 = require("tsmvc");
var UserDataRepositoryImpl = (function (_super) {
    __extends(UserDataRepositoryImpl, _super);
    function UserDataRepositoryImpl() {
        _super.apply(this, arguments);
    }
    UserDataRepositoryImpl.prototype.getUrl = function () {
        return config_1.Config.BASEURL + '/users';
    };
    return UserDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserDataRepositoryImpl;
//# sourceMappingURL=UserDataRepositoryImpl.js.map
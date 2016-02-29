"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var config_1 = require("../config/config");
var tsmvc_1 = require("tsmvc");
var AddressDataRepositoryImpl = (function (_super) {
    __extends(AddressDataRepositoryImpl, _super);
    function AddressDataRepositoryImpl() {
        _super.apply(this, arguments);
    }
    AddressDataRepositoryImpl.prototype.getUrl = function () {
        return config_1.Config.BASEURL + '/addresses';
    };
    AddressDataRepositoryImpl.prototype.getAddresses = function (userId) {
        return this.buildRequestAndParseAsModelList(config_1.Config.BASEURL + '/user/' + userId + '/addresses', 'GET', null);
    };
    return AddressDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddressDataRepositoryImpl;
//# sourceMappingURL=AddressDataRepositoryImpl.js.map
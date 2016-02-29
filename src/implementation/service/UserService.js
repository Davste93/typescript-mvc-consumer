"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var inversify_1 = require("inversify");
var UserService = (function () {
    function UserService(userDataLayer, addressDataLayer) {
        this.userDataLayer = userDataLayer;
        this.addressDataLayer = addressDataLayer;
    }
    //Gets a user list with empty address
    UserService.prototype.getUsers = function () {
        return this.userDataLayer.getAllItems();
    };
    //Gets a user, filled up with addresses.
    UserService.prototype.getCompleteUser = function (modelID) {
        var addressPromise = this.addressDataLayer.getAddresses(modelID);
        var userPromise = this.userDataLayer.getItem(modelID);
        return Promise.all([userPromise, addressPromise]).then(function (resolve) {
            var user = resolve[0];
            var address = resolve[1];
            user.addresses = address;
            return user;
        });
    };
    UserService.prototype.exists = function (modelID) {
        return this.userDataLayer.exists(modelID);
    };
    UserService.prototype.getAllItems = function () {
        return this.userDataLayer.getAllItems();
    };
    UserService.prototype.getRange = function (modelIDList) {
        return this.userDataLayer.getRange(modelIDList);
    };
    UserService.prototype.count = function () {
        return this.userDataLayer.count();
    };
    UserService.prototype.addItem = function (modelItem) {
        return this.addItem(modelItem);
    };
    UserService.prototype.removeItem = function (modelID) {
        return this.removeItem(modelID);
    };
    UserService.prototype.saveItem = function (modelItem) {
        return this.userDataLayer.saveItem(modelItem);
    };
    UserService = __decorate([
        inversify_1.Inject("UserDataRepository", "AddressDataRepository")
    ], UserService);
    return UserService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserService;
//# sourceMappingURL=UserService.js.map
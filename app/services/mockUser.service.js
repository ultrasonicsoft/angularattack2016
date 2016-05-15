"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_model_ts_1 = require('../models/user.model.ts');
var MockUserService = (function () {
    function MockUserService() {
        this.allUsers = new Array();
        var user = new user_model_ts_1.User();
        user.id = 1;
        user.name = "Prafulla";
        user.avatarUrl = "../../../images/male-avatar-1.png";
        this.allUsers.push(user);
        user = new user_model_ts_1.User();
        user.id = 2;
        user.name = "Bhushan";
        user.avatarUrl = "../../../images/male-avatar-2.png";
        this.allUsers.push(user);
        user = new user_model_ts_1.User();
        user.id = 3;
        user.name = "Nilesh";
        user.avatarUrl = "../../../images/male-avatar-3.png";
        this.allUsers.push(user);
        user = new user_model_ts_1.User();
        user.id = 4;
        user.name = "Shashikant";
        user.avatarUrl = "../../../images/male-avatar-4.png";
        this.allUsers.push(user);
        user = new user_model_ts_1.User();
        user.id = 5;
        user.name = "Megha";
        user.avatarUrl = "../../../images/female-avatar-1.png";
        this.allUsers.push(user);
        user = new user_model_ts_1.User();
        user.id = 5;
        user.name = "Suvarna";
        user.avatarUrl = "../../../images/female-avatar-2.png";
        this.allUsers.push(user);
        user = new user_model_ts_1.User();
        user.id = 6;
        user.name = "Vrushali";
        user.avatarUrl = "../../../images/female-avatar-3.png";
        this.allUsers.push(user);
    }
    MockUserService.prototype.getAllUsers = function () {
        return this.allUsers;
    };
    MockUserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MockUserService);
    return MockUserService;
}());
exports.MockUserService = MockUserService;
//# sourceMappingURL=mockUser.service.js.map
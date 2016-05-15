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
var IUserService_service_1 = require('../../services/user/interface/IUserService.service');
var conversation_component_1 = require('../conversation/conversation.component');
var searchUser_pipe_1 = require('../../pipes/searchUser.pipe');
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.allUsers = this.userService.getAllUsers();
        this.activeUser = this.allUsers[0];
        console.log(this.allUsers);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        jQuery('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false,
            hover: true,
            gutter: 0,
            belowOrigin: false,
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
        jQuery(document).ready(function () {
            jQuery('.modal-trigger').leanModal();
        });
        jQuery('#splashScreenModal').openModal();
    };
    AppComponent.prototype.setActiveUser = function (sender) {
        this.activeUser = sender;
    };
    AppComponent.prototype.sendMessage = function () {
        console.log(this.activeUser.name);
        this.conversation.newMessageAlert(this.messageText, this.activeUser);
        this.messageText = '';
    };
    __decorate([
        core_1.ViewChild(conversation_component_1.Conversation), 
        __metadata('design:type', conversation_component_1.Conversation)
    ], AppComponent.prototype, "conversation", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/components/dashboard/dashboard.html',
            directives: [conversation_component_1.Conversation],
            pipes: [searchUser_pipe_1.SearchUserPipe]
        }), 
        __metadata('design:paramtypes', [IUserService_service_1.IUserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=dashboard.component.js.map
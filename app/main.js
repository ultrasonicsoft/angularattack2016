"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var core_1 = require('@angular/core');
var mockUser_service_1 = require('./services/user/mock/mockUser.service');
var IUserService_service_1 = require('./services/user/interface/IUserService.service');
var message_service_1 = require('./services/message/message.service');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(dashboard_component_1.DashboardComponent, [core_1.provide(IUserService_service_1.IUserService, { useClass: mockUser_service_1.MockUserService }), message_service_1.MessageService]);
//# sourceMappingURL=main.js.map
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var core_1 = require('@angular/core');
var user_service_1 = require('./services/user.service');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(dashboard_component_1.AppComponent, [user_service_1.UserService]);
//# sourceMappingURL=main.js.map
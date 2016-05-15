import {bootstrap}    from '@angular/platform-browser-dynamic';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {enableProdMode, provide}    from '@angular/core';
import { MockUserService } from './services/user/mock/mockUser.service';
import { IUserService } from './services/user/interface/IUserService.service';
import { MessageService } from './services/message/message.service';

enableProdMode()

bootstrap(DashboardComponent, [provide(IUserService, { useClass: MockUserService }), MessageService]);

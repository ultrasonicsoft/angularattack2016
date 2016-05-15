import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/dashboard/dashboard.component';
import {enableProdMode, provide}    from '@angular/core';
import { MockUserService } from './services/mockUser.service';
import { IUserService } from './services/IUserService.service';
import { MessageService } from './services/message.service';

enableProdMode()

bootstrap(AppComponent, [provide(IUserService, { useClass: MockUserService }), MessageService]);

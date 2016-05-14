import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/dashboard/dashboard.component';
import {enableProdMode}    from '@angular/core';
import { UserService } from './services/user.service';
enableProdMode()
bootstrap(AppComponent, [UserService]);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SocketIoModule } from './my-socket-io/my-socket-io.module';
import { SocketIoConfig } from './my-web-socket.service';

import { AppComponent } from './app.component';
import { QuickServiceComponent } from './quick-service/quick-service.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import {ProcessCenterComponent} from './process-center/process-center.component';
import { PushDataDirective } from './push-data.directive';

const config: SocketIoConfig = { url: 'http://localhost:4220', options: {} };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot([
      {
        path: 'mainpage',
        component: MainPageComponent
      },
      {
        path: 'processcenter',
        component: ProcessCenterComponent
      },
      { path: '',
        redirectTo: '/mainpage',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    QuickServiceComponent,
    OtherInfoComponent,
    LoginPageComponent,
    MainPageComponent,
    ProcessCenterComponent,
    PushDataDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

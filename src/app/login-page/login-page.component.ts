import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {UserInfo} from '../quick-serviceinfo';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  logininfo: UserInfo = {
    username: '',
    password: '',
  };

  @Output() getLoginInfo: EventEmitter<UserInfo> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClickLogin(name: string, pwd: string) {
    this.logininfo.username = name;
    this.logininfo.password = pwd;
    this.getLoginInfo.emit(this.logininfo);
  }

}

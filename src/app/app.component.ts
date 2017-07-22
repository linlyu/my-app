import { Component, EventEmitter, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {QuickServiceInfo, OtherInfo, TopBarInfo, LeftbarInfo, UserInfo} from './quick-serviceinfo';



const LEFTBARINFOS: LeftbarInfo[] = [
  {pic_url: './assets/leftbar1.gif', a_link: '#', name: '流程中心'},
  {pic_url: './assets/leftbar4.gif', a_link: '#', name: '业务受理'},
  {pic_url: './assets/leftbar2.gif', a_link: '#', name: '查询'},
  {pic_url: './assets/leftbar3.gif', a_link: '#', name: '其他'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topinfo: TopBarInfo = {
    img_link: 'http://www.baidu.com/',
    img_url: './assets/logo.gif',
    img_search_url: '/assets/search.gif',
    logininfo: '您未登陆，请用户登陆！',
    login_url: '/assets/login.gif'
  };

  r2: Renderer2;
  el: ElementRef;
  @ViewChild('login') element: ElementRef;
  @ViewChild('logout') elout: ElementRef;
  attr: Attr;

  logininfo: UserInfo = {
    username: '',
    password: ''
  };

  leftbarinfos = LEFTBARINFOS;

  onMouseOver(i: number) {
    this.leftbarinfos[i].pic_url = './assets/test.gif';
  }

  onMouseLeave(i: number) {
    this.leftbarinfos[i].pic_url = './assets/leftbar4.gif';
  }

  onGetLoginInfo(userinfo: UserInfo) {
    this.logininfo.username = userinfo.username;
    this.logininfo.password = userinfo.password;
    this.topinfo.logininfo = this.logininfo.username;
    this.attr = this.element.nativeElement.getAttributeNode('style');
    this.attr.value = 'display: none';
    this.element.nativeElement.setAttributeNode(this.attr);
    this.attr = this.elout.nativeElement.getAttributeNode('style');
    this.attr.value = 'display: inline';
    this.element.nativeElement.setAttributeNode(this.attr);
  }

  onClickLogin() {

  }

  onClickLogout() {
    this.attr = this.elout.nativeElement.getAttributeNode('style');
    this.attr.value = 'display: none';
    this.elout.nativeElement.setAttributeNode(this.attr);
    this.attr = this.element.nativeElement.getAttributeNode('style');
    this.attr.value = 'display: inline';
    this.element.nativeElement.setAttributeNode(this.attr);
    this.topinfo.logininfo = '您未登陆，请用户登陆！';
  }

}

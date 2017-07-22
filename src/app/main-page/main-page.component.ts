import { Component, OnInit } from '@angular/core';
import {QuickServiceInfo, OtherInfo, TopBarInfo, LeftbarInfo, UserInfo} from '../quick-serviceinfo';

const QUICKSERVICES: QuickServiceInfo[] = [
  { pic_url: '/assets/quicks1.gif', pic_link: 'test', service_name: '一站式开户'},
  { pic_url: '/assets/quicks2.gif', pic_link: 'test', service_name: '一站式销户'},
  { pic_url: '/assets/quicks3.gif', pic_link: 'test', service_name: '密码重置'},
  { pic_url: '/assets/quicks4.gif', pic_link: 'test', service_name: '创业板登记'},
  { pic_url: '/assets/quicks5.gif', pic_link: 'test', service_name: '证券开户'},
  { pic_url: '/assets/quicks6.gif', pic_link: 'test', service_name: '客户佣金设置'},
  { pic_url: '/assets/quicks7.gif', pic_link: 'test', service_name: '账户注册，资料变更'},
  { pic_url: '/assets/quicks8.gif', pic_link: 'test', service_name: '身份信息变更'},
  { pic_url: '/assets/quicks9.gif', pic_link: 'test', service_name: '撤制定'},
  { pic_url: '/assets/quicks10.gif', pic_link: 'test', service_name: '转托管'}
];

const OTHERINFOS: OtherInfo[] = [
  { linkinfo: 'aaa', infoname: '客户信息管理', infodetail: '客户身份信息、联系信息、其他信息和邮寄信息的维护'},
  { linkinfo: 'aaa', infoname: '基金账户管理', infodetail: '基金账户信息变更和维护'},
  { linkinfo: 'aaa', infoname: '适当性管理', infodetail: '客户风险业务权限的开通和取消'},
  { linkinfo: 'aaa', infoname: '存管账户管理', infodetail: '存管账户信息变更和维护'},
  { linkinfo: 'aaa', infoname: '资产账户管理', infodetail: '客户交易费用，开通委托方式信息变更'},
  { linkinfo: 'aaa', infoname: '银行账户管理', infodetail: '银行账户信息变更和维护'},
  { linkinfo: 'aaa', infoname: '中登业务管理', infodetail: '登记公司信息维护'},
  { linkinfo: 'aaa', infoname: '融资融券', infodetail: '客户合同信息管理与维护'}
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  quickservices = QUICKSERVICES;
  otherinfos = OTHERINFOS;

  constructor() { }

  ngOnInit() {
  }

}

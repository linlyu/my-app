export class QuickServiceInfo {
  pic_url: string;
  pic_link: string;
  service_name: string;
}

export class OtherInfo {
  linkinfo: string;
  infoname: string;
  infodetail: string;
}

export class TopBarInfo {
  img_link: string;
  img_url: string;
  img_search_url: string;
  logininfo: string;
  login_url: string;
}

export class UserInfo {
  username: string;
  password: string;
}

export class LeftbarInfo {
  pic_url: string;
  a_link: string;
  name: string;
}

export class NameValue {
  name: string;
  GetValue(): string { return this.name; }
}

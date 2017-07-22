import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MySocket } from './my-web-socket.service';

@Injectable()
export class PushServiceService {

  constructor(private socket: MySocket) {}

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  getMessage() {
    return this.socket
      .fromEvent<any>('msg')
      .map(data => data.msg);
  }

}


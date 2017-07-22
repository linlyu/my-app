import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import * as io from 'socket.io-client';

export interface SocketIoConfig {
  url: string;
  options?: any;
}

@Injectable()
export class MySocket {
  subscribersCounter = 0;
  ioSocket: any;

  constructor(config: SocketIoConfig) {
    const url: string = config.url || '';
    const options: any = config.options || {};
    this.ioSocket = io(url, options);
  }

  on(eventName: string, callback: Function) {
    this.ioSocket.on(eventName, callback);
  }

  connect() {
    return this.ioSocket.connect();
  }

  disconnect(close?: any) {
    return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
  }

  emit(eventName: string, data: any, callback?: Function) {
    return this.ioSocket.emit.apply(this.ioSocket, arguments);
  }

  /** create an Observable from an event */
  fromEvent<T>(eventName: string): Observable<T> {
    this.subscribersCounter++;
    return Observable.create( (observer: any) => {
      this.ioSocket.on(eventName, (data: T) => {
        observer.next(data);
      });
      return () => {
        if (this.subscribersCounter === 1) {
          this.ioSocket.removeListener(eventName);
        }
      };
    }).share();
  }

}

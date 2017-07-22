import { NgModule, ModuleWithProviders } from '@angular/core';

import { MySocket, SocketIoConfig } from '../my-web-socket.service';


/** Socket factory */
export function SocketFactory(config: SocketIoConfig) {
  return new MySocket(config);
}

export const socketConfig = '__SOCKET_IO_CONFIG__';

@NgModule({})
export class SocketIoModule {
  static forRoot(config: SocketIoConfig): ModuleWithProviders {
    return {
      ngModule: SocketIoModule,
      providers: [
        { provide: socketConfig, useValue: config },
        {
          provide: MySocket,
          useFactory: SocketFactory,
          deps : [socketConfig]
        }
      ]
    };
  }
}

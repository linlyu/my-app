import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';
import {PushServiceService} from './push-service.service';
import {NameValue} from './quick-serviceinfo';

@Directive({
  selector: '[appPushData]',
  providers : [PushServiceService]
})



export class PushDataDirective implements OnInit {
  msg: string;
  tr: HTMLTableRowElement;
  td_name: HTMLTableCellElement;
  td_value: HTMLTableCellElement;
  obj: Object;
  nv: NameValue;
  constructor(private elem: ElementRef, private renderer: Renderer2, private pushService: PushServiceService) {
    renderer.setStyle(elem.nativeElement, 'backgroundColor', 'red');

  }

  ngOnInit() {
    this.msg = ''
    this.pushService
      .getMessage()
      .subscribe(msg => {
        this.msg = msg;
        this.obj = JSON.parse(this.msg.toString());
        this.nv = Object.assign(new NameValue(), this.obj);
        this.tr = this.renderer.createElement('tr');
        this.td_name = this.renderer.createElement('td');
        this.td_name.innerText = Object.keys(this.nv)[0];
        this.td_value = this.renderer.createElement('td');
        this.td_value.innerText = this.nv.GetValue();
        this.renderer.appendChild(this.tr, this.td_name);
        this.renderer.appendChild(this.tr, this.td_value);
        this.renderer.appendChild(this.elem.nativeElement, this.tr);
      });
  }

}

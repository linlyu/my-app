import { Component, OnInit, Renderer, ElementRef, Directive } from '@angular/core';
import {PushServiceService} from '../push-service.service';

@Component({
  selector: 'app-process-center',
  templateUrl: './process-center.component.html',
  styleUrls: ['./process-center.component.css'],
  providers : [PushServiceService]
})

export class ProcessCenterComponent implements OnInit {
  msg: string;

  constructor() {
  }

  ngOnInit() {

  }

}

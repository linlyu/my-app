import { Component, OnInit, Input } from '@angular/core';
import {QuickServiceInfo} from '../quick-serviceinfo';

@Component({
  selector: 'app-quick-service',
  templateUrl: './quick-service.component.html',
  styleUrls: ['./quick-service.component.css']
})
export class QuickServiceComponent implements OnInit {

  @Input() quickserviceinfo: QuickServiceInfo;
  constructor() {
  }

  ngOnInit() {
  }

}

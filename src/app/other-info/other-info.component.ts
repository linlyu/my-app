import { Component, OnInit, Input } from '@angular/core';
import {OtherInfo} from '../quick-serviceinfo';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.css']
})
export class OtherInfoComponent implements OnInit {

  @Input() otherinfo: OtherInfo;
  constructor() { }

  ngOnInit() {
  }

}

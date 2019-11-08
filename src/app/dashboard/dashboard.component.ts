import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import {DEVICES} from '../sample-devices';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices: Device[]
  fields: string[]
  selectedField: string
  constructor() { }

  ngOnInit() {
    this.devices = DEVICES.slice();
    this.fields = ['IP', 'Owner', 'CPU', 'Mem', 'TX', 'RX'];
    this.selectedField = this.fields[2];
  }

  selectField(field: string) {
    this.selectedField = field;
  }
}

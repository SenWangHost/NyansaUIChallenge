import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import {DEVICES} from '../sample-devices';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /**
   * A list of devices from sample data/backend
   */
  devices: Device[]
  /**
   * the fields a device has
   */
  fields: string[]
  /**
   * The field that the user selected to sort the device list
   */
  selectedField: string
  constructor() { }

  ngOnInit() {
    this.devices = DEVICES.slice();
    this.fields = ['IP', 'Owner', 'CPU', 'Mem', 'TX', 'RX'];
    // default field to sort is CPU
    this.selectedField = this.fields[2];
  }
  /**
   * the call back function when the user select a field to sort the device list
   * @param {string} field 
   */
  selectField(field: string) {
    this.selectedField = field;
  }
}

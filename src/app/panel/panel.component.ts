import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() sortedByField: string;
  @Input() devices: Device[]
  sortedField: string
  topFiveDevices: Device[]
  unit: string
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges() {
    if (this.sortedByField == null) {
      return;
    }
    this.sortedField = this.sortedByField.toLowerCase();
    this.topFiveDevices = this.devices.slice();
    this.topFiveDevices.sort((d1, d2) => {
      return d2[this.sortedField] - d1[this.sortedField];
    });
    this.topFiveDevices = this.topFiveDevices.slice(0, 5);
    this.setUnit();
  }
  setUnit() {
    if (this.sortedByField === 'CPU') {
      this.unit = '%';
    } else if (this.sortedByField === 'Mem') {
      this.unit = 'GB';
    } else if (this.sortedByField === 'TX' || this.sortedByField == 'RX') {
      this.unit = 'MB'
    }
  }
}

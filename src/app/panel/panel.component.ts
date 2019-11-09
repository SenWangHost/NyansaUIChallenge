import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  // sorted field passed from parent component
  @Input() sortedByField: string;
  // the devices passed from parent component
  @Input() devices: Device[]
  /**
   * the field to sort the device list
   */
  sortedField: string
  /**
   * the top five devices to show
   */
  topFiveDevices: Device[]
  /**
   * the unit for different field, CPU is %, Mem is GB and TX and RX is MB
   */
  unit: string
  constructor() { }

  ngOnInit() {
    
  }
  /**
   * The lifecycle hook when properties change for this UI component,
   * this enable the panel componment to re-render itself to show the top five that user choose
   */
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
  /**
   * the helper function to set unit for different field
   */
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

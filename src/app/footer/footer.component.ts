import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  /**
   * The version number for the UI application
   */
  version: string = 'v1.0'
  constructor() { }

  ngOnInit() {
  }

}

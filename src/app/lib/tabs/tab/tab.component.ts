import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dk-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input('name') name: string;
  @Input('show') show = false;

  constructor() {
  }

  ngOnInit() {
  }

}

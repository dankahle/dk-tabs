import {AfterContentInit, Component, ContentChildren, OnInit} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'dk-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs;
  selectedTab: TabComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.tabs.length) {
      this.tabs.forEach(t => {
        if (t.selected) {
          this.selectedTab = t;
        }
      })
      if (!this.selectedTab) {
        this.tabs.first.selected = true;
        this.selectedTab = this.tabs.first;
      }
    }
  }

  selectTab(tab: TabComponent) {
    if (tab !== this.selectedTab) {
      this.selectedTab.selected = false;
      this.selectedTab = tab;
      tab.selected = true;
    }
  }

}

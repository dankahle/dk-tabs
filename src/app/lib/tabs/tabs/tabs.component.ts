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
        console.log(t);
        if (t.show) {
          this.selectedTab = t;
        }
      })
      if (!this.selectedTab) {
        this.tabs.first.show = true;
        this.selectedTab = this.tabs.first;
      }
    }
  }

  showTab(tab: TabComponent) {
    if (tab !== this.selectedTab) {
      this.selectedTab.show = false;
      this.selectedTab = tab;
      tab.show = true;
    }
  }

}

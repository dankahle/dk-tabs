import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {IndexModule} from '../../index.module';

@NgModule({
  imports: [
    CommonModule,
    IndexModule
  ],
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent]
})
export class TabsModule { }

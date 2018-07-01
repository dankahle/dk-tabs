import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsTestComponent } from './tabs-test/tabs-test.component';
import {TabsModule} from '../../lib/tabs/tabs.module';
import {IndexModule} from '../../index.module';

@NgModule({
  imports: [
    CommonModule,
    IndexModule,
    TabsModule
  ],
  declarations: [TabsTestComponent],
  exports: [TabsTestComponent]
})
export class TabsTestModule { }

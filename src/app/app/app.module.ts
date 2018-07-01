import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TabsModule} from '../lib/tabs/tabs.module';
import {TabsTestModule} from './tabs-test/tabs-test.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {IndexModule} from '../index.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    TabsModule,
    TabsTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

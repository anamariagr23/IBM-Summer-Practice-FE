import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { PollSummaryComponent } from './poll-summary/poll-summary.component';
import {CardModule} from 'primeng/card';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PollSummaryComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

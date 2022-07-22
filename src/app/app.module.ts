import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { PollListComponent } from './poll-list/poll-list.component';
import {CardModule} from 'primeng/card';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PollDetailsComponent } from './poll-details/poll-details.component';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PollListComponent,
    PollDetailsComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    AppRoutingModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { PollListComponent } from './poll-list/poll-list.component';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PollDetailsComponent } from './poll-details/poll-details.component';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ChartAnswerComponent } from './chart-answer/chart-answer.component';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PollListComponent,
    PollDetailsComponent,
    CreatePollComponent,
    ChartAnswerComponent,
    LoginComponent
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
    InputTextareaModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    ChartModule,
    DropdownModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

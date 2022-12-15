import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { PollListComponent } from '../poll-list/poll-list.component';
import { PollDetailsComponent } from '../poll-details/poll-details.component';
import { CreatePollComponent } from '../create-poll/create-poll.component';
import { ChartAnswerComponent } from '../chart-answer/chart-answer.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'polls',
  },
  {
    path: 'polls',
    component: PollListComponent,
  },
  {
    path: 'polls/:id',
    component: PollDetailsComponent,
  },
  {
    path: 'add-poll',
    component: CreatePollComponent,
  },
  {
    path: 'chart-answer',
    component: ChartAnswerComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'polls',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

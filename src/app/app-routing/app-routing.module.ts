import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { PollListComponent } from '../poll-list/poll-list.component';
import { PollDetailsComponent } from '../poll-details/poll-details.component';

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

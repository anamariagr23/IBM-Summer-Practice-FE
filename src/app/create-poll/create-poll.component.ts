import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Observable, Timestamp } from 'rxjs';
import { PollDetails } from '../models/poll-details';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
 
  @ViewChild("pollCreateForm") pollCreateForm?: NgForm;

  @Output() createPoll:EventEmitter<Observable<PollDetails>>=new EventEmitter();
  
  constructor(private http:HttpClient,private pollService:PollService,private router:Router) { }
  ngOnInit(): void {


  }
  onPollCreate(poll:PollDetails) {
     this.pollService.createPoll(poll)
     .subscribe((createdPoll:PollDetails) => {
      this.router.navigate(['/polls'])
     })
    
    this.pollCreateForm?.resetForm();
    
  }


}

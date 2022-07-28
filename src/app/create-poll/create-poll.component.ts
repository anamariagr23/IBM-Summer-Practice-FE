import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Timestamp } from 'rxjs';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
 
  @ViewChild("pollCreateForm") pollCreateForm?: NgForm;
  
  constructor(private http:HttpClient,private pollService:PollService) { }
  ngOnInit(): void {


  }
  onPollCreate(polls: {topic: string, startingDate: Date, closingDate: Date }) {
   this.pollService.createPoll(polls);
    this.pollCreateForm?.resetForm();
  }


}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PollDetails } from '../models/poll-details';
import { PollService } from '../services/poll.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {
  public pollDetails: PollDetails;
  constructor(private route: ActivatedRoute,private http:HttpClient,private pollService:PollService) { }
  //constructor(private route: ActivatedRoute,private pollService: PollService) { }

  // ngOnInit(): void {
  //   this.route.paramMap
  //   .subscribe(parms => {
  //     let id = Number(parms.get('id'));
  //     this.pollService.getPollDetails(id).subscribe(response => this.pollDetails=response);
  //   });

  // }
  onSubmit(form: NgForm){
    console.log(form)
    const answerValue=form["answer"];
    const commentValue=form["comment"];
    const newPollDetails:PollDetails={
      ...this.pollDetails,
      answer:answerValue,
      comment:commentValue,
    }
    console.log(this.pollDetails);
    console.log(form["answer"]);
    console.log(newPollDetails);
  }

  ngOnInit(){
    this.route.paramMap
      .subscribe(parms => {
        let id = parms.get('id');
       console.log(id);
       this.pollService.getPollDetails(id).subscribe((response) => this.pollDetails=response);
      });
      console.log(this.pollDetails);
  }

}

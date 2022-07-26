import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PollDetails } from '../models/poll-details';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {
  public pollDetails!: PollDetails;
  constructor(private route: ActivatedRoute,private pollService: PollService) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(parms => {
      let id = Number(parms.get('id'));
      this.pollService.getPollDetails(id).subscribe(response => this.pollDetails=response);
    });

  }
  // onSubmit(form: NgForm){
    
  //   const answerValue=form.form.controls["answer"].value;
  //   const newPollDetails:PollDetails={
  //     ...this.pollDetails,
  //     answer:answerValue,
  //     comment:"lol"
  //   }
  //   console.log(this.pollDetails);
  //   console.log(form.form.controls["answer"].value);
  //   console.log(newPollDetails);
  // }
  onSubmit(pollAnswer:NgForm){
    
  }

}

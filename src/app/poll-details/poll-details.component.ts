import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PollDetails } from '../models/poll-details';
import { PollService } from '../services/poll.service';
import { AnswerDetails } from '../models/answer-details';
import { switchMap } from 'rxjs/operators';
import { PollAnswersService } from '../services/poll-answers.service';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {

  @ViewChild("pollAnswersForm") pollAnswersForm: NgForm;

  public pollDetails: PollDetails; 
  public answerDetails: AnswerDetails;

  constructor(private route: ActivatedRoute, private http: HttpClient, private pollService: PollService,private pollAnswerService: PollAnswersService,private router:Router) { }
  
  onSubmit(form: NgForm) {

    const answerValue = form["answer"];
    const commentValue = form["comment"];

    this.answerDetails = {
      userId: 1,
      pollId: this.pollDetails.id,
      voteDate: new Date(),
      vottingDetail: answerValue,
      content: commentValue,
    }
    // if(answerValue){
    //   this.pollAnswerService.createAnswer(this.answerDetails);
    // }
    this.pollAnswerService.createAnswer(this.answerDetails);
    console.log(this.answerDetails);
    this.pollAnswersForm.reset();
  }
 

  ngOnInit() {
    this.route.paramMap
      .subscribe(parms => {
        
        let id = <number><unknown>parms.get('id');
        console.log(id);
        this.pollService.getPollDetails(id).subscribe((response) => this.pollDetails = response);
        this.pollAnswerService.getAnswerByPollIdAndUserId(1,id).subscribe((response)=> 
        {
          if(response){
            this.pollAnswersForm.setValue({answer:response.vottingDetail, comment:response.content});
            this.answerDetails = {
              vottingDetail:response.vottingDetail,
              content:response.content,
              id: response.id,
              userId: response.userId,
              pollId: response.pollId,
              voteDate: response.voteDate
  
            };
          }
          
          console.log(response);
        })
      });
    console.log(this.pollDetails);
  }

  deletePoll(id: number) {
    this.http.delete('http://localhost:8080/poll/delete/' + id )
      .subscribe();
    
    

  }

  hasUserAlreadyAnswered(){
    
    return typeof this.answerDetails !== 'undefined' && this.answerDetails.vottingDetail;
  }
 
  updatePollAnswer(form: NgForm){


    const answerValue = form["answer"];
    const commentValue = form["comment"];

    // this.answerDetails = {
    //   userId: 1,
    //   pollId: this.pollDetails.id,
    //   voteDate: new Date(),
    //   voteRating: answerValue,
    //   comment: commentValue,
    // }
    var answerToBeSent : AnswerDetails = {
      ...this.answerDetails
    
    }

    answerToBeSent.voteDate = new Date();
    answerToBeSent.vottingDetail= answerValue;
    answerToBeSent.content= commentValue;
    console.log(this.answerDetails);
    this.pollAnswerService.updateAnswer(this.answerDetails.id,answerToBeSent);

  }
  

}

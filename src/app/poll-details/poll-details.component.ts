import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private http: HttpClient, private pollService: PollService,private pollAnswerService: PollAnswersService) { }
  
  onSubmit(form: NgForm) {

    const answerValue = form["answer"];
    const commentValue = form["comment"];

    this.answerDetails = {
      userId: 1,
      pollId: this.pollDetails.id,
      voteDate: new Date(),
      voteRating: answerValue,
      comment: commentValue,
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
        let id = parms.get('id');
        console.log(id);
        this.pollService.getPollDetails(id).subscribe((response) => this.pollDetails = response);
        this.pollAnswerService.getAnswerByPollIdAndUserId(1,id).subscribe((response)=> 
        {
          this.pollAnswersForm.setValue({answer:response.voteRating, comment:response.comment});
          this.answerDetails = {
            voteRating:response.voteRating,
            comment:response.comment,
            id: response.id,
            userId: response.userId,
            pollId: response.pollId,
            voteDate: response.voteDate

          };
          console.log(response);
        })
      });
    console.log(this.pollDetails);
  }

  deletePoll(id: string) {
    this.http.delete('https://pollmetterbe-default-rtdb.europe-west1.firebasedatabase.app/polls/' + id + '.json')
      .subscribe();

  }

  hasUserAlreadyAnswered(){
    
    return typeof this.answerDetails !== 'undefined' && this.answerDetails.voteRating;
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
      ...this.answerDetails,
      id:undefined
    
    }

    answerToBeSent.voteDate = new Date();
    answerToBeSent.voteRating= answerValue;
    answerToBeSent.comment= commentValue;
    console.log(this.answerDetails);
    this.pollAnswerService.updateAnswer(this.answerDetails.id,answerToBeSent);

  }
  

}

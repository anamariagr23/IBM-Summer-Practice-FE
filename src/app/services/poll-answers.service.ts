import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnswerDetails } from '../models/answer-details';
import { map, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollAnswersService {
  public pollAnswersList : AnswerDetails[] = [];

  constructor(private http: HttpClient) { }

  createAnswer(answer: AnswerDetails) {
    this.http.post('http://localhost:8080/answers/add', answer)
      .subscribe((res) => {
        console.log(res);
      })

  }
  getAnswersList(){
    return this.http.get<{[key:string]:AnswerDetails}>('http://localhost:8080/answers/')
    .pipe(map((res)=>{
      const answers = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          answers.push({...res[key],id:key})
        }
        

      }
      this.pollAnswersList=answers;
      return answers;
      

    }))
   
  }
  
  getAnswerByPollIdAndUserId(userId:number,pollId:number){
    return this.http.get<AnswerDetails>('http://localhost:8080/answers/find/poll/'+pollId+'/user/'+userId);
    // let pollAnswer: AnswerDetails;
    // var subject = new Subject<AnswerDetails>();
    // this.getAnswersList()
    // .subscribe((answers) => {
    //   pollAnswer = answers.find((answer)=>{return answer.pollId ===pollId && answer.userId === userId});
    //   subject.next(pollAnswer);
    // })
    // return subject.asObservable();
    
  
  }

  updateAnswer(id:number,answer:AnswerDetails){
    return this.http.put('http://localhost:8080/answers/update',answer)
    .subscribe()

  }

}

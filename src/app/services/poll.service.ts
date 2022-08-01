import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';
import { PollDetails } from '../models/poll-details';
import { PollSummary } from '../models/poll-summary';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  constructor(private http:HttpClient) { }
  public pollSummaryList : PollDetails[] = [];

  createPoll(poll: PollDetails):Observable<PollDetails>{
    console.log(poll)
    
    return this.http.post<PollDetails>('https://pollmetterbe-default-rtdb.europe-west1.firebasedatabase.app/polls.json',poll)
    
  }

  getPollList(){
    return this.http.get<{[key:string]:PollDetails}>('https://pollmetterbe-default-rtdb.europe-west1.firebasedatabase.app/polls.json')
    .pipe(map((res)=>{
      const polls = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          polls.push({...res[key],id:key})
        }
        

      }
      this.pollSummaryList=polls;
      return polls;
      

    }))
    
  }
  getPollDetails(id: string) {
    let currentPoll = this.pollSummaryList.find((p)=>{return p.id === id})
    console.log(this.pollSummaryList)
    return of(currentPoll);
  }




}

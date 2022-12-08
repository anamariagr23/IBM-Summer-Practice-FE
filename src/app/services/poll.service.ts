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
    
    return this.http.post<PollDetails>('http://localhost:8080/poll/add',poll)
    
  }

  getPollList(){
    return this.http.get<PollDetails[]>('http://localhost:8080/poll/');
    
    
  }

  getPollDetails(id: number) {
    console.log(id);
    return this.http.get<PollDetails>('http://localhost:8080/poll/find/'+id);
    
    
  }




}

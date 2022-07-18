import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PollSummary } from '../models/poll-summary';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  mockPollSummaryList : PollSummary[] = [
    {
      id: 1,
      topic: "Concediu mai lung?",
      authorId: 3,
      closingDate: "14/09/2022"
    },
    {
      id: 2,
      topic: "Concediu mai scurt?",
      authorId: 3,
      closingDate: "23/10/2022"
    },
    {
      id: 5,
      topic: "Cat de mult va place Timisoara?",
      authorId: 3,
      closingDate: "20/09/2022"
    },
    {
      id: 6,
      topic: "Drumeție la munte",
      authorId: 8,
      closingDate: "10/09/2022"
    },
    {
      id: 7,
      topic: "Teambuilding septembrie",
      authorId: 3,
      closingDate: "21/09/2022"
    },
    {
      id: 8,
      topic: "Cat de mult va place Timisoara?",
      authorId: 4,
      closingDate: "22/09/2022"
    }
  ];

  getPollSummaryList() : Observable<PollSummary[]>{
    return of(this.mockPollSummaryList)
  }
}

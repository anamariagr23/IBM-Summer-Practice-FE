import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PollSummary } from '../models/poll-summary';
import { PollDetails} from '../models/poll-details';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  public pollSummaryList : PollDetails[] = [];
  // constructor(private pollService: PollService) { }

//  ngOnInit() {
//     this.getPollSummaryList();
//   }

//   public getPollSummaryList(): void {
//     this.pollService.getPollSummaryList()
//       .subscribe(
//         (response: PollSummary[]) => {
//           console.log(response);
//           this.pollSummaryList = response;
//         }
//       );
//   }

  constructor(private http:HttpClient,private pollService:PollService){}

  ngOnInit(){
    this.getPollSummaryList();
  }

  private getPollSummaryList(){
    this.pollService.getPollList()
    .subscribe((polls) => {
      this.pollSummaryList = polls;
    })

  }
  

 

}

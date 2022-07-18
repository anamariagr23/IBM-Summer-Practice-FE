import { Component, OnInit } from '@angular/core';
import { PollSummary } from '../models/poll-summary';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-poll-summary',
  templateUrl: './poll-summary.component.html',
  styleUrls: ['./poll-summary.component.css']
})
export class PollSummaryComponent implements OnInit {

  public pollSummaryList : PollSummary[] = [];

  constructor(private pollService: PollService) { }

 ngOnInit() {
    console.log("inainte de promise");
    this.getPollSummaryList();
  }

  public getPollSummaryList(): void {
    console.log("am intrat in getsummarylist");
    this.pollService.getPollSummaryList()
      .subscribe(
        (response: PollSummary[]) => {
          console.log(response);
          this.pollSummaryList = response;
          console.log("am intrat in promise");
        }
      );
  }

 

}

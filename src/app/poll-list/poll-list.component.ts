import { Component, OnInit } from '@angular/core';
import { PollSummary } from '../models/poll-summary';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  public pollSummaryList : PollSummary[] = [];

  constructor(private pollService: PollService) { }

 ngOnInit() {
    this.getPollSummaryList();
  }

  public getPollSummaryList(): void {
    this.pollService.getPollSummaryList()
      .subscribe(
        (response: PollSummary[]) => {
          console.log(response);
          this.pollSummaryList = response;
        }
      );
  }

 

}

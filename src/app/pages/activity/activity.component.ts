import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public activities: any[];

  // The number of activities from each category to display
  @Input('pageSize')
  pageSize = 10; // Display 10 activities from each category by default.

  constructor(public activityService: ActivityService) { }

  ngOnInit() {
    this.getRecentActivity();
  }

  getRecentActivity() {
    this.activityService.get().subscribe(
      data => {
        this.activities = data;
      },
      error => {
        console.log('Error');
      });
  }
}

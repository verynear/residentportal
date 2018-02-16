import { Component, OnInit, Input } from '@angular/core';
import { AnnouncementService } from '../../services/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  loading: boolean;
  announcements: Array<any>;
  totalItems: number;
  itemsPerPage: number;      // The number of announcements per page.
  page: number;
  error: boolean;

  // The number of announcements to display
  @Input('pageSize')
  pageSize = 8;

  // Whether or not to include pagination.
  @Input('paginate')
  paginate = true;

  constructor(public announcementService: AnnouncementService) {
  }

  ngOnInit() {
    this.getAllAnnouncements();
    this.itemsPerPage = this.pageSize;    // Number of announcements per page.
    this.page = 1;                        // Starting Page
  }

  getAllAnnouncements() {
    this.loading = true;
    this.announcementService.getAll().subscribe(
      data => {
        this.announcements = data['announcements'];
        this.totalItems = data['announcements'].length;
      },
      error => {
        this.loading = false;
        this.error = true;
      });
  }

}

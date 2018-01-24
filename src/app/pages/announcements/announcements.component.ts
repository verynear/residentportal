import { Component, OnInit } from '@angular/core';
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
  itemsPerPage: number;      // The number of emails per page.
  page: number;

  constructor(public announcementService: AnnouncementService) { }

  ngOnInit() {
    this.getAllAnnouncements();
    this.itemsPerPage = 3;   // Number of Mail Items per page.
    this.page = 1;            // Starting Page
  }

  getAllAnnouncements() {
    this.loading = true;
    this.announcementService.getAll().subscribe(
      data => {
        this.loading = false;
        this.announcements = data['announcements'];
        this.totalItems = data['announcements'].length;
      },
      error => {
        console.log('Error');
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { Inquiry } from '../../../models/inquiry';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CheckboxModule, TooltipModule } from 'primeng/primeng';
import { HtmlToPlainPipe } from '../../../pipes/html-to-plain.pipe';

@Component({
  selector: 'app-sentbox',
  templateUrl: './sentbox.component.html',
  styleUrls: ['./sentbox.component.scss']
})
export class SentboxComponent implements OnInit {
  inquiries: Array<Inquiry>;
  itemsPerPage: number;      // The number of messages per page.
  totalItems: number;
  page: number;
  checkAll: boolean;
  loading: boolean;
  test: boolean;

  constructor(private router: Router, public messageService: MessageService, config: NgbDropdownConfig) {
     messageService.onRefresh$.subscribe(sent => {
      this.onRefresh();
    });
    // Default values for dropdowns.
    config.autoClose = 'outside';
  }

  ngOnInit() {
    this.itemsPerPage = 25;     // Number of Mail Items per page.
    this.page = 1;              // Starting Page
    this.checkAll = false;      // By Default, all mail items unchecked.
    this.getSent(this.page - 1, this.itemsPerPage); // Get Messages.
  }

  pageChange() {
    this.nextPage(this.page - 1, this.itemsPerPage); // page-1 because NgBootstrap starts at page=1
  }

  nextPage(page, itemsPerPage) {
    this.loading = true;
    this.messageService.getSent(page, itemsPerPage).subscribe(
      data => {
        this.loading = false;
        this.inquiries = data['content'];
      });
  }

  getSent(page, itemsPerPage) {
    this.loading = true;
    this.messageService.getSent(page, itemsPerPage).subscribe(
      data => {
        this.loading = false;
        this.inquiries = data['content'];
        this.totalItems = data['totalPages'] * data['numberOfElements'];
      });
  }

  selectAllInquiries() {
    console.log('select all inquiries');
    for (const inquiry of this.inquiries) {
      inquiry.selected = this.checkAll;
    }
  }

  onRefresh() {
    this.page = 0;
    this.getSent(this.page, this.itemsPerPage);
  }

  // For sort event./
  onSorted($event) {
    this.inquiries = this.messageService.sortInquiries(this.inquiries, $event);
  }

  openInquiry(id) {
    this.router.navigate(['/messages/sent', id]);
  }

}

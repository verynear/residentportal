import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { Message } from '../../../models/message';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/primeng';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  messages: Array<any>;
  itemsPerPage: number;      // The number of emails per page.
  totalItems: number;
  page: number;
  checkAll: boolean;
  loading: boolean;
  test: boolean;

  constructor(private router: Router, public messageService: MessageService, config: NgbDropdownConfig) {
    // Default values for dropdowns.
    config.autoClose = 'outside';
  }

  ngOnInit() {
    this.itemsPerPage = 25;   // Number of Mail Items per page.
    this.page = 1;            // Starting Page
    this.checkAll = false;    // By Default, all mail items unchecked.
    this.getAllMessages();       // Get Messages.
  }

  getAllMessages() {
    this.loading = true;
    this.messageService.getAll().subscribe(
      data => {
        this.loading = false;
        this.messages = data;
        this.totalItems = data.length;
      },
      error => {
        console.log('Error');
      });
  }

  selectAllMessages() {
    console.log('select all messages');
    for (const message of this.messages) {
      message.selected = this.checkAll;
    }
    console.log(this.checkAll);
    console.log(this.messages);
  }

  // For sort event./
  onSorted($event) {
    this.messages = this.messageService.sortMessages(this.messages, $event);
  }

  openMessage(id) {
    this.router.navigate(['/messages/view', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { Message } from '../../../models/message';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

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
  
  constructor(public messageService: MessageService, config: NgbDropdownConfig) {
    // Default values for dropdowns.
    config.autoClose = "outside";
  }

  ngOnInit() {
    this.itemsPerPage = 25;   // Number of Mail Items per page.
    this.page = 1;            // Starting Page
    this.checkAll = false;    // By Default, all mail items unchecked.
    this.getMessages();       // Get Messages.
  }

  getMessages() {
    this.messageService.get().subscribe(
      data => {
        this.messages = data;
        this.totalItems = data.length;
      },
      error => {
        console.log('Error');
      });
  }

  selectAllMessages(checkAll) {
    for (let message of this.messages) {
      message.selected = !checkAll;
    }
  }

  // For sort event./ 
  onSorted($event) {
    console.log("Got Sort Event");
    console.log($event);
    this.messages = this.messageService.sortMessages(this.messages, $event);
  }

  openMessage(id) {
    console.log('You\'ve Opened' + id);
    // TODO: Create a new component for reading messages.
  }

}

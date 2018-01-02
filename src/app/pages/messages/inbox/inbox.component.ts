import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  messages: Array<any>;
  itemsPerPage: number;    // The number of emails per page.
  totalItems: number;
  page:number;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.itemsPerPage = 15;
    this.page = 1;
  
    this.getMessages();
  }

  getMessages() {
    this.messageService.get().subscribe(
      data => {
        this.messages = data;
        this.totalItems = data.length;
      },
      error => {
        console.log("Error");
      });
  }

  openMessage(id) {
    console.log("You've Opened" + id);
    // TODO: Create a new component for reading messages.
  }

}

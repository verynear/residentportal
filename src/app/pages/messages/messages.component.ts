import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService, private router: Router) { }

  ngOnInit() {

  }

  isInbox() {
    return this.router.url === '/messages/inbox';
  }


  viewingMessage() {
    if (this.router.url.includes('messages/view')) {
      return true;
    }

    return false;
  }


}

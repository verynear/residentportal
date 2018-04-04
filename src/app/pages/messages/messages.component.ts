import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message';
import { Router, ActivatedRoute } from '@angular/router';
import { ComposeComponent } from '../../components/compose/compose.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {

  }

  onInbox() {
    return this.router.url === '/messages/inbox';
  }

  onSentbox() {
    return this.router.url === '/messages/sent';
  }

  viewingReceived() {
    if (this.router.url.includes('messages/inbox/')) {
      return true;
    }

    return false;
  }

  viewingSent() {
    if (this.router.url.includes('messages/sent/')) {
      return true;
    }

    return false;
  }

  refreshInbox() {
      this.messageService.onRefresh();
  }

  refreshSentbox() {
      this.messageService.onSent();
  }

  compose() {
    const modalRef = this.modalService.open(ComposeComponent, { size: 'lg' });
  }

}

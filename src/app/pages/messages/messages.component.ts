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

  viewingReceived() {
    if (this.router.url.indexOf('messages/view') > -1) {
      return true;
    }

    return false;
  }

  viewingSent() {
    if (this.router.url.indexOf('messages/sent') > -1) {
      return true;
    }

    return false;
  }

  refreshInbox() {
      this.messageService.onRefresh();
  }

  compose() {
    const modalRef = this.modalService.open(ComposeComponent, { size: 'lg' });
  }

}

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

  viewingMessage() {
    if (this.router.url.includes('messages/view')) {
      return true;
    }

    return false;
  }

  compose() {
    const modalRef = this.modalService.open(ComposeComponent, { size: 'lg' });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message';

/*
  Component: Message-List

  Description: Component to display recent messages in dropdown on top of menu.
  Input: @Param maxSize: The number of messages to display in the list.
  @Param previewLength: The length of the message preview, in characters.

  Dependencies: Shorten.Pipe, HtmlToPlain.Pipe, NgBootstrap, Bootstrap
*/

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  loading: boolean;
  messages: Message[];

  @Input('maxSize') // The number of messages to display in the list.  4 by Default.
  maxSize = 4;

  @Input('previewLength') // The length of the message preview, in characters.  25 by Default.
  previewLength = 25;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.getMessages(0, this.maxSize);
  }

  getMessages(page, itemsPerPage) {
    this.loading = true;
    this.messageService.getAll(page, itemsPerPage).subscribe(
      data => {
        this.loading = false;
        this.messages = data['messages'];
      },
      error => {
        this.loading = false;
      });
  }

}

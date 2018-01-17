import { Component, OnInit, Input, Output, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  message: any;
  loading: boolean;

  constructor(private route: ActivatedRoute, public messageService: MessageService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getMessage(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getMessage(id) {
    this.messageService.get(id).subscribe(
      data => {
        this.loading = false;
        this.message = data;

        this.setRead(id); // Message is now read.
      },
      error => {
        console.log('Error');
      });
  }

  setRead(id) {
    this.messageService.setRead(id).subscribe(
      data => {
        console.log('Message Read.');
        console.log('data:');
        console.log(data);
      },
      error => {
        console.log('Error');
    });

  }
}

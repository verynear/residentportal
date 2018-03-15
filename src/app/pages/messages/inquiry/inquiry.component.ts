import { Component, OnInit, Input, Output, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  inquiry: any;
  loading: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, public messageService: MessageService) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getInquiry(this.id);
    });
    this.loading = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getInquiry(id) {
    this.messageService.getInquiry(id).subscribe(
      data => {
        this.loading = false;
        this.inquiry = data;
      },
      error => {
        console.log('Error');
      });
  }

}

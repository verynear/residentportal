import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from '../../services/message.service';
import { ReplacePipe } from '../../pipes/replace.pipe';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule, ProgressSpinnerModule } from 'primeng/primeng';

import { Message } from '../../models/message';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  loading = false;
  messageForm: FormGroup;
  subject: FormControl;
  message: FormControl;

  constructor(private router: Router, public activeModal: NgbActiveModal,
    public messageService: MessageService) {}

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.subject = new FormControl('');
        this.message = new FormControl('', Validators.required);
    }

    createForm() {
        this.messageForm = new FormGroup({
            subject: this.subject,
            message: this.message
        });
    }

    send() {
        this.loading = true;
        const message = new Message();

        message.message = this.messageForm.value.message;
        message.subject = this.messageForm.value.subject;
        message.messageType = 'Announcement';

        message.message = new ReplacePipe().transform(message.message, '<br>'); // Remove all occurences of <br>

        this.messageService.postMessage(message).subscribe(
            data => {
                this.activeModal.close('success');
                this.loading = false;
            },
            error => {
                this.activeModal.close('failure');
                this.loading = false;
        });
    }

}

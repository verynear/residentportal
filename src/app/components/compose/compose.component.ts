import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../services/alert.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/primeng';

import { MessageService } from '../../services/message.service';
import { UploadFileService } from '../../services/upload-file.service';
import { FormUploadComponent } from '../form-upload/form-upload.component';
import { ReplacePipe } from '../../pipes/replace.pipe';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule, ProgressSpinnerModule } from 'primeng/primeng';

import { Message } from '../../models/message';
import { Attachment } from '../../models/attachment';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit, AfterViewInit {

  loading = false;
  newMessageId: number;
  lastLink: any;
  attachments: Attachment[];
  messageForm: FormGroup;
  subject: FormControl;
  message: FormControl;
  messageType: FormControl;
  urgentBool: FormControl;
  isUrgent: number;
  public getDataFromChild(event: Attachment) {
    if (event) {
      this.attachments.push(event);
      console.log('ATTACHMENT ADDED');
      console.log(event);
    }
  }
  public removeAttachment(event) {
    if (event) {
      const index = this.attachments.findIndex(d => d.fileSizeKB === event.size);
      this.attachments.splice(index, 1);
      console.log('REMOVED:');
      console.log(event.name);
    }
  }

  constructor(private router: Router, public activeModal: NgbActiveModal, public messageService: MessageService,
    private uploadService: UploadFileService, private alertService: AlertService, private rd: Renderer2) {}

    ngOnInit() {
        this.attachments = [];
        this.createFormControls();
        this.createForm();
        this.setDefaultValues();
    }


    ngAfterViewInit() {
          const element = this.rd.selectRootElement('.ql-picker-label');
          this.rd.setAttribute(element, 'tabindex', '-1');
    }

    // sets radio button
    setDefaultValues() {
       this.messageForm.patchValue({messageType: 'GENERAL_INQUIRY'});
       this.messageForm.patchValue({urgentBool: false});
    }

    // setUrgent(event) {
    //   console.log('URGENT');
    //   this.isUrgent = event.target.defaultValue;
    //   console.log(this.isUrgent);
    // }

    createFormControls() {
        this.subject = new FormControl('');
        this.urgentBool = new FormControl('');
        this.message = new FormControl('', Validators.required);
        this.messageType = new FormControl('', Validators.required);
    }

    createForm() {
        this.messageForm = new FormGroup({
            subject: this.subject,
            urgentBool: this.urgentBool,
            message: this.message,
            messageType: this.messageType,
        });
    }

    send() {
        this.loading = true;
        const message = new Message();

        message.messageType = this.messageForm.value.messageType;
        if (this.messageForm.value.urgentBool) {
          message.isUrgent = 1;
        } else {
          message.isUrgent = 0;
        }
        message.message = this.messageForm.value.message;
        message.subject = this.messageForm.value.subject;

        console.log(message);

        message.message = new ReplacePipe().transform(message.message, '<br>'); // Remove all occurences of <br>

        this.messageService.postMessage(message).subscribe(
            data => {
                this.activeModal.close('success');
                this.loading = false;
                this.newMessageId = data['id'];
                this.lastLink = '/messages/sent/' + this.newMessageId;
                if (this.attachments.length) {
                  this.uploadService.postAttachments(this.newMessageId, this.attachments).subscribe(
                      data1 => {
                          console.log('Attachments Posted');
                          console.log(this.attachments);
                      },
                      error1 => {
                          console.log('Failed to post Attachments');
                      });
                }
                this.alertService.success('Your message has been sent', this.lastLink, true, false);
            },
            error => {
                this.activeModal.close('failure');
                this.alertService.error('Message Failed to Send');
                this.loading = false;
        });
    }

}

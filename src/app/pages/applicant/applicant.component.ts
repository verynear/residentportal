import { Component, OnInit } from '@angular/core';
import {ApplicantService} from '../../services/applicant.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {
  model: any = {};
  loading = false;
  message: string;
  errorMessage: string;

  constructor(private service: ApplicantService) { }

  ngOnInit() {
  }

  register() {
    this.message = '';
    this.errorMessage = '';

    this.loading = true;
    this.service.create(this.model)
      .subscribe(
        data => {
          this.loading = false;
          this.message = 'Success';
          this.model = {};
        },
        (res: HttpErrorResponse) => {
          this.errorMessage = res.error ? res.error.message : 'Ops...';
          this.loading = false;
        });
  }

}

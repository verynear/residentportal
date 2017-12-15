import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../models/applicant';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model: any = {};
  loading = false;
  message: string;
  errorMessage: string;

  constructor(private service: ApplicantService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.service.create(this.model)
      .subscribe(
        data => {
          this.loading = false;
          this.message = 'Success';
          this.model = {};
        },
        error => {
          this.errorMessage = 'Ops...';
          this.loading = false;
        });
  }

}

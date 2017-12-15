import { Injectable } from '@angular/core';

import { Applicant } from '../models/applicant';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class ApplicantService {
  private baseURL = `${environment.api.baseUrl}/sign-up`;

  constructor(private http: HttpClient) { }

  create(applicant: Applicant) {
    return this.http.post(this.baseURL, applicant);
  }

}

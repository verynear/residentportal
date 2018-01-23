import { Injectable } from '@angular/core';

import { Applicant } from '../models/applicant';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import { ConfigService } from './config.service';

@Injectable()
export class ApplicantService {
  private baseURL: string;

  constructor(private http: HttpClient,
              private config: ConfigService) {

    this.baseURL = config.get().api.baseURL;
  }

  create(applicant: Applicant) {
    return this.http.post(this.baseURL, applicant);
  }

}

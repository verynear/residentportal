import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Announcement } from '../models/announcement';
import { ConfigService } from './config.service';

@Injectable()
export class AnnouncementService {

  private baseURL: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.baseURL = config.get().api.baseURL;
  }

  getAll() {
    return this.http.get<Announcement[]>(this.baseURL + '/announcements');
  }

  get(id) {
    return this.http.get<Announcement[]>(this.baseURL + '/announcements/' + id);
  }
}

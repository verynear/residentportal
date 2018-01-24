import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Announcement } from '../models/announcement';

@Injectable()
export class AnnouncementService {

  private baseURL = environment.api.baseUrl;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Announcement[]>(this.baseURL + '/announcements');
  }

  get(id) {
    return this.http.get<Announcement[]>(this.baseURL + '/announcements/' + id);
  }
}

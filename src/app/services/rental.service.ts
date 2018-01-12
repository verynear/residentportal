import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RentalSite } from '../models/rental-site';

@Injectable()
export class RentalService {
  private url = environment.api.baseUrl;

  constructor(private http: HttpClient) { }

  getRentalSite(id: number): Promise<RentalSite> {
    return this.http.get<RentalSite>(`${this.url}/rental/site/${id}`)
      .toPromise();
  }

}

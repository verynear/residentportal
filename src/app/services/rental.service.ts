import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalSite } from '../models/rental-site';
import { ConfigService } from './config.service';

@Injectable()
export class RentalService {
  private url: string;

  constructor(private http: HttpClient,
              private config: ConfigService) {

    this.url = config.get().api.baseURL;
  }

  getRentalSite(id: number): Promise<RentalSite> {
    return this.http.get<RentalSite>(`${this.url}/rental/site/${id}`)
      .toPromise();
  }

}

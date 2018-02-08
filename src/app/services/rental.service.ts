import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalSite } from '../models/rental-site';
import { ConfigService } from './config.service';

@Injectable()
export class RentalService {
  private url: string;
  private subdomain: string;

  constructor(private http: HttpClient,
              private config: ConfigService) {

    this.url = config.get().api.baseURL;
    this.subdomain = config.get().customer.subdomain;
  }

  getRentalSite(id: number): Promise<RentalSite> {
    return this.http.get<RentalSite>(`${this.url}/rental/site/${id}`)
      .toPromise();
  }

  getBrandingCssUrl(): string {
    return `${this.url}/rental/branding/css?domain=${this.subdomain}`;
  }

  getBrandingData(): Promise<RentalSite> {
    return this.http.get<RentalSite>(`${this.url}/rental/branding/data?domain=${this.subdomain}`)
      .toPromise();
  }

  checkSubdomain(): Promise<boolean> {
    return this.getBrandingData()
      .then(() => true)
      .catch(() => false);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site';
import { ConfigService } from './config.service';
import { ThemeService } from './theme.service';
import { Observable } from 'rxjs/Observable';

/*
  This service is responsible for endpointsthat are at a Site (Community) Level.
*/

@Injectable()
export class SiteService {
  private url: string;
  private leasenet: string;
  private subdomain: string;
  private host: string;

  constructor(private http: HttpClient,
              private config: ConfigService,
              private themeService: ThemeService) {

    this.url = config.get().api.baseURL;
    this.leasenet = config.get().api.leasenet;
    this.subdomain = config.get().customer.subdomain;
    this.host = config.get().customer.host;
  }

  init() {
    this.applyTheme();
  }

  getSite(id: number): Observable<Site> {
    return this.http.get<Site>(`${this.url}/rental/site/${id}`)
    .catch((error: any) => {
      return Observable.throw(this.errorHandler(error));
    });
  }

  getBrandingCssUrl(): string {
    return `${this.url}/rental/branding/css?domain=${this.subdomain}`;
  }

  getBrandingData(): Promise<Site> {
    return this.http.get<Site>(`${this.url}/rental/branding/data?domain=${this.subdomain}`)
      .toPromise();
  }

  applyTheme() {
    this.getBrandingData().then(rentalSite => {
      this.themeService.applyTheme(rentalSite.bgColor);
    });
  }

  errorHandler(error: any): void {
    console.log('Error: SiteService');
    console.log(error);
  }
}


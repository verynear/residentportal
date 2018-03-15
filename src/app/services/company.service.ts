import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site';
import { ConfigService } from './config.service';
import { ThemeService } from './theme.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService {
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

  getBrandingData(): Observable<Site> {
    return this.http.get<Site>(`${this.leasenet}/company/branding/data?domain=${this.subdomain}`)
      .catch((error: any) => {
        return Observable.throw(this.errorHandler(error));
      });
  }

  checkSubdomain(): Promise<boolean> {
    if (!(this.config.get().environments.indexOf(this.host) > -1)) {
      return Promise.resolve(false);
    }

    return this.http.get(`${this.leasenet}/rental/company/validate?domain=${this.subdomain}`)
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }

  applyTheme() {
    this.getBrandingData().subscribe(rentalSite => {
      this.themeService.applyTheme(rentalSite.bgColor);
    });
  }

  errorHandler(error: any): void {
    console.log('Error: CompanyService');
    console.log(error);
  }


}


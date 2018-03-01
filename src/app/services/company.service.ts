import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site';
import { ConfigService } from './config.service';
import { ThemeService } from './theme.service';

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

  getBrandingData(): Promise<Site> {
    return this.http.get<Site>(`${this.leasenet}/company/branding/data?domain=${this.subdomain}`)
      .toPromise();
  }

  checkSubdomain(): Promise<boolean> {
    if (!this.config.get().environments.includes(this.host)) {
      return Promise.resolve(false);
    }

    return this.getBrandingData()
      .then(() => true)
      .catch(() => false);
  }

  applyTheme() {
    this.getBrandingData().then(rentalSite => {
      this.themeService.applyTheme(rentalSite.bgColor);
    });
  }




}

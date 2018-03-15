import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Site} from '../models/site';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ThemeService {
  private url: string;
  private subdomain: string;
  private leasenet: string;

  constructor(private http: HttpClient,
    private config: ConfigService) {
  }

  // Theme certain elements of the site with a primary color.
  applyTheme(primary: string) {

    console.log('Applying Theme with Primary: ' + primary);

    const str = '.btn-primary {background-color: ' + primary + ' !important} ' +
    '.primary.active {background-color: ' + primary + ' !important}' +
    '.primary:hover {background-color: ' + primary + ' !important}' +
    'h1 {color: ' + primary + ' !important}' +
    '.ui-fileupload-choose {background-color: ' + primary + ' !important}' +
    '.rematt {background-color: ' + primary + ' !important}';

    const node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
  }
}



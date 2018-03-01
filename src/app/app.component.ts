import {Component} from '@angular/core';
import {LoginService} from './services/login.service';
import {User} from './models/user';
import {SiteService} from './services/site.service';
import {Router} from '@angular/router';
import {SessionService} from './services/session.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SafeValue} from '@angular/platform-browser/src/security/dom_sanitization_service';
import {ThemeService} from './services/theme.service';
import {CompanyService} from './services/company.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hasAuth = false;
  public brandingCSS: SafeValue;

  constructor(
    private loginService: LoginService,
    private siteService: SiteService,
    private companyService: CompanyService,
    private session: SessionService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private themeService: ThemeService
  ) {
    this.addLoginListener();
    this.validateDomain();

    this.brandingCSS = sanitizer.bypassSecurityTrustResourceUrl(this.siteService.getBrandingCssUrl());
    this.siteService.init();  // Init the community theme.
  }

  private addLoginListener(): void {
    this.loginService.onLogin
      .subscribe((user: User | boolean) => {
        this.hasAuth = !!user;
      });
  }

  private validateDomain(): void {
    this.companyService.checkSubdomain()
      .then((isValidDomain: boolean) => {
        if (!isValidDomain) {
          this.session.set('invalidDomain', true);
          this.router.navigate(['invalid-domain']);
        } else {
          this.session.set('invalidDomain', false);
        }
      });
  }
}

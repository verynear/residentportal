import {Component} from '@angular/core';
import {LoginService} from './services/login.service';
import {User} from './models/user';
import {RentalService} from './services/rental.service';
import {Router} from '@angular/router';
import {SessionService} from './services/session.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SafeValue} from '@angular/platform-browser/src/security/dom_sanitization_service';
import {ThemeService} from './services/theme.service';

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
    private rentalService: RentalService,
    private session: SessionService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private themeService: ThemeService
  ) {
    this.addLoginListener();
    this.validateDomain();

    this.brandingCSS = sanitizer.bypassSecurityTrustResourceUrl(this.rentalService.getBrandingCssUrl());
    this.rentalService.init();
  }

  private addLoginListener(): void {
    this.loginService.onLogin
      .subscribe((user: User | boolean) => {
        this.hasAuth = !!user;
      });
  }

  private validateDomain(): void {
    this.rentalService.checkSubdomain()
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

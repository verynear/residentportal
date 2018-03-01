import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { SiteService } from '../../services/site.service';
import { Site } from '../../models/site';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public site: Site;
  public isCollapsed = true;

  constructor(private loginService: LoginService,
              private session: SessionService,
              private router: Router,
              private siteService: SiteService) { }

  ngOnInit() {
    const siteId = this.session.get('currentUser').rentalSiteId;

    this.siteService.getSite(siteId).subscribe(data => {
      this.site = data;
    });
  }

  logout() {
    this.loginService.logout()
      .then(() => this.router.navigate(['login']));
  }
}

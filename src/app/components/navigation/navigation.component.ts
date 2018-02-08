import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RentalService } from '../../services/rental.service';
import { RentalSite } from '../../models/rental-site';
import { SessionService } from '../../services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public rentalSite: RentalSite;
  public isCollapsed = true;
  constructor(private loginService: LoginService,
              private session: SessionService,
              private router: Router,
              private rentalService: RentalService) { }

  ngOnInit() {
    const siteId = this.session.get('currentUser').rentalSiteId;

    this.rentalService.getRentalSite(siteId)
      .then((rentalSite: RentalSite) => this.rentalSite = rentalSite);
  }

  logout() {
    this.loginService.logout()
      .then(() => this.router.navigate(['login']));
  }



}

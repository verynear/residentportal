import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ComposeComponent } from '../../components/compose/compose.component';
import { SessionService } from '../../services/session.service';
import { SiteService } from '../../services/site.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Site } from '../../models/site';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  site: Site;

  constructor(private userService: UserService, private sessionService: SessionService, private modalService: NgbModal,
    private siteService: SiteService) {

  }

  ngOnInit() {
    this.currentUser = this.sessionService.get('currentUser');

    this.siteService.getSite(this.currentUser.rentalSiteId).subscribe(data => {
      this.site = data;
    });
  }

  compose() {
    const modalRef = this.modalService.open(ComposeComponent, { size: 'lg' });
  }

}

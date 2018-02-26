import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ComposeComponent } from '../../components/compose/compose.component';
import { SessionService } from '../../services/session.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService, private sessionService: SessionService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.currentUser = this.sessionService.get('currentUser');
  }

  compose() {
    const modalRef = this.modalService.open(ComposeComponent, { size: 'lg' });
  }

}

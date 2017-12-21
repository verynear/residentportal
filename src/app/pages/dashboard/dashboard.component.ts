import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService, private sessionService: SessionService) {

  }

  ngOnInit() {
    this.currentUser = this.sessionService.get('currentUser');
    console.log('Received User In Dashboard: ');
    console.log(this.currentUser);
  }

}

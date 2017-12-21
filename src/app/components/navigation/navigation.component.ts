import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isCollapsed = true;
  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  logout() {
    this.loginService.logout();
  }



}

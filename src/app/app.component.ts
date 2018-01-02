import {Component} from '@angular/core';
import {LoginService} from './services/login.service';
import {User} from './models/user';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hasAuth = false;

  

  constructor(private loginService: LoginService) {
    console.log("Hello from App component");
    this.loginService.onLogin
      .subscribe((user: User | boolean) => {
        console.log("Hello from auth");
        
        this.hasAuth = !!user;
        console.log(this.hasAuth);
      });
  }
}

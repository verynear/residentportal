import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { LoginService } from '../../services/login.service';
import { environment } from '../../../environments/environment';


@Component({
    moduleId: module.id.toString(),
    templateUrl: './login.component.html',
    selector: 'app-login',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    version: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private alertService: AlertService) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.version = environment.version;

      if (this.route.snapshot.queryParams['out']) {
        this.loginService.logout()
          .then(() => this.router.navigate(['login']));
      }
    }

    login() {
        this.loading = true;
        this.loginService.login(this.model.emailAddress, this.model.password)
            .then(() => this.router.navigate([this.returnUrl]
            ))
            .catch((error: any) => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
    }
}

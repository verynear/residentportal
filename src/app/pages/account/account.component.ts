import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public currentUser: User;
  public accountForm: FormGroup;

  constructor(private sessionService: SessionService, private userService: UserService,
   private alertService: AlertService, private router: Router, public fb: FormBuilder) {
    this.accountForm = this.fb.group({
       email: new FormControl({value: null, disabled: true}, Validators.required),
       password: ['', [Validators.minLength(6), Validators.maxLength(30)]],
       verify: ['', Validators.minLength(6)],
     });
  }

  ngOnInit() {
    this.sessionService.getObservable('currentUser').subscribe(user => {
      this.currentUser = user;
    });

    this.accountForm.patchValue({
      email: this.currentUser.emailAddress
    });
  }

  update() {
    const user = this.currentUser;

    user.emailAddress = this.accountForm.value.email;
    user.password = this.accountForm.value.password;

    this.userService.update(user).subscribe(
        data => {
            this.alertService.success('Update successful');
            this.router.navigate(['/dashboard']);
        },
        error => {
            this.alertService.error('Unable to Update User');
        });
  }

}

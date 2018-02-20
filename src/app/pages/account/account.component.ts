import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private currentUser: User;
  private accountForm: FormGroup;

  constructor(private sessionService: SessionService, public formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.minLength(6), Validators.maxLength(30)]],
      verify: ['', Validators.minLength(6)],
    });

    this.sessionService.getObservable('currentUser').subscribe(user => {
      this.currentUser = user;
    });
  }

  update() {


    // TODO: Update User Information.
  }

}

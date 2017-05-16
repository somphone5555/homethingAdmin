import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  fLogin: FormGroup;
  logined: boolean;

  constructor(private formBuild: FormBuilder, private route: Router, private loginService: LoginService) {
    this.logined = false;
  }

  ngOnInit() {
    this.fLogin = this.formBuild.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.fLogin.valid) {
      this.loginService.getLogin(this.fLogin.value).subscribe(
        success => {
          if (success.err === 0) {
            this.fLogin.reset();
            localStorage.setItem('hToken', success.token);
            this.route.navigate(['home']);
          }
        },
        err => {
          if (err.err === 1) {
            this.logined = true;
          }
          this.fLogin.reset();
        }
      );

    }
  }
}

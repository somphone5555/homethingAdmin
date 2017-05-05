import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private fLogin: FormGroup;

  constructor(private formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.fLogin = this.formBuild.group({
      username: ['yourthor', [Validators.required]],
      password: ['99833266', [Validators.required]]
    });
  }

}

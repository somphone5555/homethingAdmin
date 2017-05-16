import {Component, DoCheck} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  logoutbtn: boolean;

  constructor(private route: Router) {
  }

  onload() {
    if (localStorage.getItem('hToken')) {
      this.logoutbtn = true;
    } else {
      this.logoutbtn = false;
    }
  }

  home() {
    this.route.navigate(['home']);
  }

  logout() {
    localStorage.removeItem('hToken');
    this.route.navigate(['']);
  }

  ngDoCheck() {
    this.onload();
  }

}

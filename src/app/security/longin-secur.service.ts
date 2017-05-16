import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
@Injectable()
export class LonginSecurService implements CanActivate {

  constructor(private route: Router) {
  }

  canActivate() {
    if (!localStorage.getItem('hToken')) {
      return true;
    }
    this.route.navigate(['/home']);
    return false;
  }
}

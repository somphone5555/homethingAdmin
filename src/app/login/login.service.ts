import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppServer} from '../config/app.server';

@Injectable()
export class LoginService {

  constructor(private httpService: Http, private server: AppServer) {
  }

  getLogin(data: { username: string, password: string }) {
    const header = new Headers();
    header.append('Content-type', 'application/x-www-form-urlencoded');

    const user = {'user': data.username, 'passwd': data.password};

    return this.httpService.post(this.server.getServer() + this.server.getLoginRoute(), user)
      .map((success) => {
        return success.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }

}

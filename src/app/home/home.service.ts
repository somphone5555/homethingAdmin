import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppServer} from '../config/app.server';

@Injectable()
export class HomeService {

  constructor(private httpService: Http, private server: AppServer) {
  }

  getDevices() {
    const header = new Headers();
    const token = localStorage.getItem('hToken');
    header.append('Authorization', `Bearer ${token}`);
    const options = new RequestOptions({headers: header});

    /** const devices = {sdid: '0', dtype:'Smart switch'};
     console.log(devices);*/

    return this.httpService.get(this.server.getServer() + this.server.getDevicesRoute(), options)
      .map((success) => {
        return success.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }

  editDevices(dType: string, sdid: string) {
    const header = new Headers();
    const token = localStorage.getItem('hToken');
    header.append('Authorization', `Bearer ${token}`);
    const options = new RequestOptions({headers: header});

    const device = {sdid: sdid, dtype: dType};


    return this.httpService.post(this.server.getServer() + this.server.getEditRoute(), device, options)
      .map((success) => {
        return success.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }


  deleteDevices(sdid: string) {
    const header = new Headers();
    const token = localStorage.getItem('hToken');
    header.append('Authorization', `Bearer ${token}`);
    const options = new RequestOptions({headers: header});

    const device = {sdid: sdid};


    return this.httpService.post(this.server.getServer() + this.server.getDeleteRoute(), device, options)
      .map((success) => {
        return success.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }

}

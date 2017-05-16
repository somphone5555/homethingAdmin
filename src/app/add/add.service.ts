import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppServer} from '../config/app.server';

@Injectable()
export class AddService {

    constructor(private httpService: Http, private server: AppServer) {

    }


    addDevices(data: { sdid: string, sharecode: string, dtype: string }) {
        const header = new Headers();
        const token = localStorage.getItem('hToken');
        header.append('Authorization', `Bearer ${token}`);
        const options = new RequestOptions({headers: header});

        const device = data;

        /*    console.log(device);*/
        return this.httpService.post(this.server.getServer() + this.server.getAddRoute(), device, options)
            .map((success) => {
                return success.json();
            })
            .catch((error) => {
                return Observable.throw(error.json() || 'Server error');
            });
    }
}

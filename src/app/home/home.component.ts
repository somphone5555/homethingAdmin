import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from './home.service';
import {Observable} from 'rxjs/Rx';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HomeComponent implements OnInit {
  cols: number;
  check: boolean[] = [];
  editText: string[] = [];
  devices: Observable<Object[]>;
  fDType: FormGroup;
  hqr: boolean[] = [];
  editQr: string[] = [];
  confirm: boolean[] = [];


  constructor(private route: Router, private homeService: HomeService, private formBuider: FormBuilder) {
    this.fDType = this.formBuider.group({
      dType: ['']
    });
    this.loadDevices();

  }

  ngOnInit() {
    const winwidth = window.innerWidth;
    this.resizeWindows(winwidth);

  }

  loadDevices() {
    this.homeService.getDevices().subscribe(
      (success) => {
        if (success.err === 0) {
          /*          console.log(success.devices);*/
          for (let i = 0; i < success.devices.length; i++) {
            this.editText.push('Edit');
            this.check[i] = false;
            this.editQr.push('QR code');
            this.hqr[i] = false;
            this.confirm[i] = false;
          }
          /*          console.log(this.editText);
           console.log(this.check);*/
          this.devices = success.devices;
        }

      },
      (error) => {
        console.log(error);
      }
    );
  }

  onResize(event) {
    const winwidth = event.target.innerWidth;
    this.resizeWindows(winwidth);
  }

  private resizeWindows(winwidth) {
    if (winwidth <= 414) {
      this.cols = 1;
    } else if (winwidth <= 720) {
      this.cols = 2;
    } else if (winwidth <= 960) {
      this.cols = 3;
    } else if (winwidth <= 1024) {
      this.cols = 4;
    } else {
      this.cols = 5;
    }
  }

  add() {
    this.route.navigate(['add']);
  }

  checkbtn(index: number) {
    this.check[index] = !this.check[index];
    if (this.check[index]) {
      this.editText[index] = 'Cancel';
    } else {
      this.editText[index] = 'Edit';
    }
  }

  qrState(index: number) {
    this.hqr[index] = !this.hqr[index];
    if (this.hqr[index]) {
      this.editQr[index] = 'Cancel';
    } else {
      this.editQr[index] = 'QR code';
    }
  }

  editDevice(curDevice: Object, index: number) {
    /*    console.log(curDevice);
     console.log(this.fDType.value);*/
    this.homeService.editDevices(this.fDType.value['dType'], curDevice['sdid']).subscribe(
      (success) => {
        /*        console.log(success);*/
        if (success.err === 0) {
          this.checkbtn(index);
          this.qrState(index);
          this.fDType.reset();
        this.loadDevices();
      }

      },
      (error) => {
        console.log(error);
        this.checkbtn(index);
        this.fDType.reset();
      }
    );
  }

  confirmbtn(index: number){
    this.confirm[index] = !this.confirm[index];
  }
  noconfirm(index: number){
    this.confirm[index] = !this.confirm[index];
  }
  deleteDevice(curDevice: Object) {

    this.homeService.deleteDevices(curDevice['sdid']).subscribe(
      (success) => {
        /*        console.log(success);*/
        if (success.err === 0) {
          this.loadDevices();
        }

      },
      (error) => {
        console.log(error);
      }
    );
  }


}



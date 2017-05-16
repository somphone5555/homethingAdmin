import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-qrcode',
  template: `
    <div>
      <qr-code [value]= 'qrcode' [size]="250"></qr-code>
    </div>

  `,
  styles: [`button {
    background-color: green;
    color: white;
    margin-top: 1rem;
    width: 50%
  }`]
})
export class QrcodeComponent implements OnInit {

  @Input() qrcode: string;

  constructor() {
  }

  ngOnInit() {
  }

}

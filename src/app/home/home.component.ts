import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{
    '(window:resize)': 'onResize($event)'
  }
})
export class HomeComponent implements OnInit {
  cols: number;
  constructor() { }

  ngOnInit() {
    let winwidth = window.innerWidth;
    this.resizeWindows(winwidth);
  }

  onResize(event){
    let winwidth = event.target.innerWidth;
    this.resizeWindows(winwidth);
  }

  private resizeWindows(winwidth){
    if( winwidth <= 414)
    {
      this.cols = 1;
    }else if(winwidth <= 720)
    {
      this.cols = 2;
    }else if(winwidth <= 960)
    {
      this.cols = 3;
    }
    else
    {
      this.cols = 4;
    }
  }

}

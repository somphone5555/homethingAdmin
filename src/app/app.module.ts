import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AddComponent} from './add/add.component';
import {QrcodeComponent} from './add/qrcode/qrcode.component';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdCardModule,
  MdInputModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdGridListModule,
  MdSidenavModule,
  MdListModule,
  MdSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdGridListModule,
    ReactiveFormsModule,
    MdSidenavModule,
    MdListModule,
    MdSelectModule,
    FlexLayoutModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

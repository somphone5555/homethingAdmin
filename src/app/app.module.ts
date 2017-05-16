import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

/**Library*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
  MdSelectModule,
  MdDialogModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {QRCodeModule} from 'angular2-qrcode';

/**Generate component*/
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AddComponent} from './add/add.component';
import {QrcodeComponent} from './add/qrcode/qrcode.component';
import {appRoute} from './appRouter';
import {RoutesecurityService} from './security/routesecurity.service';
import {LonginSecurService} from './security/longin-secur.service';
import {AppServer} from './config/app.server';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddComponent,
    QrcodeComponent,

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
    MdDialogModule,
    FlexLayoutModule,
    RouterModule,
    appRoute,
    QRCodeModule


  ],
  providers: [RoutesecurityService, LonginSecurService, AppServer],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {Routes, RouterModule} from '@angular/router';

import {AddComponent} from './add/add.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RoutesecurityService} from './security/routesecurity.service';
import {LonginSecurService} from './security/longin-secur.service';



const router: Routes = [
  {path: '', component: LoginComponent, canActivate: [LonginSecurService]},
  {path: 'home', component: HomeComponent, canActivate: [RoutesecurityService]},
  {path: 'add', component: AddComponent, canActivate: [RoutesecurityService]},
  {path: '**', redirectTo: ''}
];

export const appRoute = RouterModule.forRoot(router, {useHash: true});

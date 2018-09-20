import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {NgModule} from '@angular/core';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'welcome', component: WelcomePageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }

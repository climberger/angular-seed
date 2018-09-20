import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import {CoreRoutingModule} from './core-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    CoreRoutingModule // CoreRoutingModule needs to be imported after all feature modules, to load wildcard route at last!!!
  ],
  declarations: [
    LoginPageComponent,
    NavigationBarComponent,
    WelcomePageComponent
  ],
  exports: [
    RouterModule,
    NavigationBarComponent
  ],
  providers: []
})
export class CoreModule { }

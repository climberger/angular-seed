import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import {CoreRoutingModule} from './core-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '../store/store.module';
import {NgReduxRouterModule} from '@angular-redux/router';
import {ExampleFeatureModule} from '../features/example-feature/example-feature.module';

@NgModule({
  imports: [
    HttpClientModule,
    NgReduxRouterModule.forRoot(),
    StoreModule,
    SharedModule,
    ExampleFeatureModule,
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

// TODO: add redux stuff to handle list states in core redux state

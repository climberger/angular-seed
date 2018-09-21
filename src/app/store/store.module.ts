import { NgModule } from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {AppState} from './state-model';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ],
  declarations: []
})
export class StoreModule {

  constructor(private store: NgRedux<AppState>,
              private devTools: DevToolsExtension,
              private ngReduxRouter: NgReduxRouter) {

  }

}

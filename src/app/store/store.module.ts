import { NgModule } from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {NgReduxRouter, NgReduxRouterModule, routerReducer} from '@angular-redux/router';
import {AppState} from './state-model';
import {composeReducers, defaultFormReducer, provideReduxForms} from '@angular-redux/form';
import {environment} from '../../environments/environment';
import {applyMiddleware, combineReducers, Reducer} from 'redux';
import logger from 'redux-logger';
import {coreRootReducer} from '../core/redux/core.reducers';
import {exampleFeatureReducer} from '../features/example-feature/redux/example-feature.reducers';

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

    // configure the store
    this.store.configureStore(
      this.getRootReducer(),
      this.getInitialState(),
      this.getMiddlewares(),
      this.getEnhancers()
    );

    // initialize redux routing
    this.initializeReduxRouting();

    // initialize redux forms
    this.initializeReduxForms();

  }



  getRootReducer(): Reducer<AppState> {
    return composeReducers(
      defaultFormReducer(),
      combineReducers({
        core: coreRootReducer,
        feature: exampleFeatureReducer,
        router: routerReducer
      }));
  }

  getInitialState(): AppState {
    return {core: undefined, feature: undefined};
  }


  // TODO: implement real check for redux logging and redux devtool property in environment
  getMiddlewares() {
    const bol = true;
    if (bol) { // environment.reduxLoggingEnabled
      return [logger, ...this.createRootEpics()];
    } else {
      return [...this.createRootEpics()];
    }
  }

  getEnhancers() {
    const bol = true;
    if (bol) { // environment.reduxDevToolsEnabled
      return this.devTools.isEnabled() ? [ this.devTools.enhancer() ] : [];
    } else {
      return [];
    }

  }

  createRootEpics() {
    return [

    ];
  }


  initializeReduxRouting() {
    if (this.ngReduxRouter) {
      this.ngReduxRouter.initialize();
    }
  }

  initializeReduxForms() {
    provideReduxForms(this.store);
  }

}

import {ExampleFeatureState} from '../features/example-feature/redux/example-feature.state';
import {CoreState} from '../core/redux/core.state';

export interface AppState {
  feature: ExampleFeatureState;
  core: CoreState;
}

export interface LightStore {
  getState: Function;
  dispatch: Function;
}

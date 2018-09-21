import {ExampleFeatureState} from './example-feature.state';
import {Action} from 'redux';
import {CoreState} from '../../../core/redux/core.state';

const INITIAL_EXAMPLE_FEATURE_STATE = {
  tmp: 'initial'
};

export function exampleFeatureReducer(state: ExampleFeatureState = INITIAL_EXAMPLE_FEATURE_STATE, action: Action): ExampleFeatureState {

  const exampleFeatureAction = action as ExampleFeatureAction;

  switch (exampleFeatureAction.type) {
    case EXAMPLE:
      return reduceExampleAction(state, exampleFeatureAction);
    default:
      return state;
  }

}

function reduceExampleAction(state: CoreState, a: ExampleFeatureAction): CoreState {

  return {
    ...state,
    tmp: 'changed'
  };
}

export interface ExampleFeatureAction {
  type: typeof EXAMPLE;
  tmp: string;
}

export const EXAMPLE = 'EXAMPLE';

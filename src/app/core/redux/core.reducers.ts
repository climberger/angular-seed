import {CoreState} from './core.state';
import {Action} from 'redux';

const INITIAL_CORE_STATE: CoreState = {
  tmp: 'initial',

};

export function coreRootReducer(state: CoreState = INITIAL_CORE_STATE, action: Action): CoreState {

  const coreAction = action as CoreAction;

  switch (coreAction.type) {
    case EXAMPLE:
      return reduceExampleAction(state, coreAction);
    default:
      return state;
  }

}

function reduceExampleAction(state: CoreState, a: CoreAction): CoreState {

  return {
    ...state,
   tmp: 'changed'
  };
}

export interface CoreAction {
  type: typeof EXAMPLE;
  tmp: string;
}

export const EXAMPLE = 'EXAMPLE';

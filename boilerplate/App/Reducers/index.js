// import { combineReducers } from 'redux';

/**
 * combineReducers neatly gathers results from all the reducers
 * to a single state object. The shape of the state object matches the keys of
 * the passed reducers. Any reducers passed to combinereducers must satisfy these rules:
 *
 * 1. for any action unrecognised, it must return the default state passed as the parameter.
 * 2. Never return undefined or check if a state is undefined and return the default state.
 *
 */

const INITIAL_STATE = {

};

/**
 *
 * @param {*} state
 * @param {*} action
 */
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

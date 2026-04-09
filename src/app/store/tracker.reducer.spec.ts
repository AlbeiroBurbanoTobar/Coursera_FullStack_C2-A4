import { trackerReducer, initialState } from './tracker.reducer';
import * as TrackerActions from './tracker.actions';

describe('Tracker Reducer', () => {

  it('Debe retornar el estado inicial por defecto', () => {
    const action = { type: 'Unknown' };
    const state = trackerReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('Debe incrementar la cuenta de un tag especifico al lanzar clickElement', () => {
    const tagToTest = 'test-button';
    const action = TrackerActions.clickElement({ tag: tagToTest });
    
    // Primer click
    const state1 = trackerReducer(initialState, action);
    expect(state1.counts[tagToTest]).toBe(1);

    // Segundo click
    const state2 = trackerReducer(state1, action);
    expect(state2.counts[tagToTest]).toBe(2);
  });

  it('Debe mantener la suma independiente para diferentes tags', () => {
    const tag1 = 'button-1';
    const tag2 = 'button-2';
    
    const action1 = TrackerActions.clickElement({ tag: tag1 });
    const action2 = TrackerActions.clickElement({ tag: tag2 });

    let state = trackerReducer(initialState, action1);
    state = trackerReducer(state, action2);
    state = trackerReducer(state, action1);

    expect(state.counts[tag1]).toBe(2);
    expect(state.counts[tag2]).toBe(1);
  });

});

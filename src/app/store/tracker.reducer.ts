import { createReducer, on } from '@ngrx/store';
import { clickElement } from './tracker.actions';

export interface TrackerState {
  counts: { [tag: string]: number };
}

export const initialState: TrackerState = {
  counts: {}
};

export const trackerReducer = createReducer(
  initialState,
  on(clickElement, (state, { tag }) => {
    const currentCount = state.counts[tag] || 0;
    return {
      ...state,
      counts: {
        ...state.counts,
        [tag]: currentCount + 1
      }
    };
  })
);

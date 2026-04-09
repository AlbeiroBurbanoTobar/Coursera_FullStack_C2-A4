import { createAction, props } from '@ngrx/store';

export const clickElement = createAction(
  '[Tracker] Click Element',
  props<{ tag: string }>()
);

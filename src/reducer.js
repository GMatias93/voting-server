import { setEntries, next, vote } from './core';

export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.payload);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return vote(state, action.payload);
  }
  return state;
}

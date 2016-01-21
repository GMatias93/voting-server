import { List, Map } from 'immutable';

export function setEntries(state, entries) {
  // const immutableEntries = fromJS(entries, (key, value) => {
  //   return value.toList();
  // });
  // return state.set('entries', immutableEntries);

  return state.set('entries', List(entries));
}

export function next(state) {
  const entries = state.get('entries');
  return state.merge({
    vote: Map({ pair: entries.take(2) }),
    entries: entries.skip(2),
  });
}

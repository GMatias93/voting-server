import { List } from 'immutable';

export function setEntries(state, entries) {
  // const immutableEntries = fromJS(entries, (key, value) => {
  //   return value.toList();
  // });
  // return state.set('entries', immutableEntries);

  return state.set('entries', List(entries));
}

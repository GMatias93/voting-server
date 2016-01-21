import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setEntries } from '../src/core';

describe('Application logic', () => {
  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Transpotting', '28 Days Later');
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Transpotting', '28 Days Later'),
      }));

    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = ['Transpotting', '28 Days Later'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Transpotting', '28 Days Later'),
      }));

    });

  });

});

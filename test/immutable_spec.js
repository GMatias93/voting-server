import { expect } from 'chai';
import { List } from 'immutable';

describe('Immutability', () => {
  describe('A Number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('Is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('A List', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('Is immutable', () => {
      let state = List.of('Transpotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Transpotting',
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.equal(List.of(
        'Transpotting',
        '28 Days Later'
      ));
    });

  });

});

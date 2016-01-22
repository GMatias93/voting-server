import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_ENTRIES', () => {
    const initialState = Map();
    const action = { type: 'SET_ENTRIES', payload: ['Transpotting'] };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Transpotting'],
    }));

  });

  it('handles NEXT', () => {
    const initialState = fromJS({
      entries: ['Transpotting', '28 Days Later'],
    });
    const action = { type: 'NEXT' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Transpotting', '28 Days Later'],
      },
      entries: [],
    }));

  });

  it('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Transpotting', '28 Days Later'],
      },
      entries: [],
    });
    const action = { type: 'VOTE', payload: 'Transpotting' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Transpotting', '28 Days Later'],
        tally: { Transpotting: 1 },
      },
      entries: [],
    }));

  });

});

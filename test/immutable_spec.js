import {expect} from 'chai';

describe('immutability', () => {

  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutability', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('a List', () => {
    function addMovie(currentState, movie) {
			return currentState.push(movie);
		}

		it('is immutability', () => {
			let state = List.of('Trainspotting', '28 Days Later');
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(List.of(
				'Trainspotting',
				'28 Days Later',
				'Sunshine'
			));
			expect(state).to.equal(List.of(
				'Trainspotting',
				'28 Days Later'
			));
		});

	});

	describe('a tree', () => {
		function addMovie(currentState, movie) {
			//Map.set(key,value): returns a new Map containing the new key,value pair
			//replaces key if it's already present
			return currentState.set(
				'movies',
				//Map.get(key): returns the value associated with the provided key
				currentState.get('movies').push(movie)
			);
		}

		it('is immutable', () => {
			let state = Map({
				movies: List.of('Trainspotting', '28 Days Later')
			});
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later',
					'Sunshine'
				)
			}));
			expect(state).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later'
				)
			}));
		});

	});

});

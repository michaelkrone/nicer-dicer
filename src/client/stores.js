import { readable, writable } from 'svelte/store';
import { makeRandom } from '../shared/utils';

export const random = (max) =>
	readable(max, function start(set) {
		const interval = setInterval(() => {
			set(max.map(makeRandom));
		}, 50);

		return function stop() {
			clearInterval(interval);
		};
	});

export const roles = writable(0);

export const numbers = writable(['?']);

export const channel = writable('');

export const username = writable('');

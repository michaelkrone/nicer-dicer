export function pickRandom(arr) {
	const i = ~~(Math.random() * arr.length);
	return arr[i];
}

export function makeRandom(max) {
	return ~~(Math.random() * Math.min(max, 1000)) + 1;
}

export function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

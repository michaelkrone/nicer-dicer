let ws;
module.exports = {
	initWebsocket() {
		const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
		if (ws) {
			console.log('socket already initialized');
			return;
		}
		ws = new WebSocket(`${protocol}//${window.location.host}`);
		ws.addEventListener('message', (event) => {
			const data = JSON.parse(event.data);
			console.log(data, event);
		});
		return ws;
	},
	send(data) {
		ws.send(JSON.stringify(data));
	},
	get() {
		return ws;
	},
};

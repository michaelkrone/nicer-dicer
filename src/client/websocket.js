let ws;

function init() {
	return new Promise((resolve, reject) => {
		if (ws && ws.readyState === 1) {
			return resolve(ws);
		}
		const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
		ws = new WebSocket(`${protocol}//${window.location.host}`);
		ws.onopen = () => resolve(ws);
		ws.onerror = () => reject();
	});
}

function getData(event) {
	return JSON.parse(event.data);
}

function send(data) {
	return init().then((s) => {
		s.send(JSON.stringify(data));
		return s;
	});
}

module.exports = {
	init,
	send,
	getData,
	joinChannel(name, channel) {
		return send({ action: 'join', name, channel });
	},
	leaveChannel() {
		return send({ action: 'leave' });
	},
	setName(name) {
		return send({ action: 'set-name', name });
	},
	roll(max) {
		return send({ action: 'roll', max });
	},
	isAction(event, action) {
		return getData(event).action === action;
	},
};

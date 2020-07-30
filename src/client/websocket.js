let ws;

function init() {
	return new Promise((resolve, reject) => {
		if (ws) {
			return resolve(ws);
		}
		const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
		ws = new WebSocket(`${protocol}//${window.location.host}`);
		ws.onopen = () => resolve(ws);
		ws.onerror = () => reject();
	});
}

async function send(data) {
	(await init()).send(JSON.stringify(data));
	return ws;
}

module.exports = {
	init,
	send,
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
};

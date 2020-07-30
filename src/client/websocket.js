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

async function send(data) {
	let s = await init();
	s.send(JSON.stringify(data));
	return s;
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
	isRollAction(event) {
		return getData(event).action === 'roll';
	},
	isSetRollAction(event) {
		return getData(event).action === 'set-roll';
	},
	isJoinedAction(event) {
		return getData(event).action === 'joined';
	},
	getRollData(event) {
		return getData(event).roles;
	},
	getChannelData(event) {
		return getData(event).channel;
	},
	getUsernameData(event) {
		return getData(event).username;
	},
};

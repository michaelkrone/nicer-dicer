import * as http from 'http';
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import Moniker from 'moniker';
import * as sapper from '@sapper/server';
import WebSocket from 'ws';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const server = http.createServer();

polka({ server })
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, (err) => {
		if (err) console.log('error', err);
	});

const wss = new WebSocket.Server({
	server,
});

wss.on('connection', (ws) => {
	let socketInfo = {
		name: '',
		channel: '',
	};

	ws.on('close', () => {
		broadcastChannel({
			action: 'message',
			name: 'server',
			content: `@${socketInfo.name} just left the server :(`,
		});
	});

	ws.on('message', (json) => {
		const data = JSON.parse(json);

		if (data.action === 'join') {
			socketInfo = {
				name: data.name || Moniker.choose(),
				channel: data.channel || Moniker.choose(),
			};
			ws.channelName = socketInfo.channel;
			broadcastChannel(
				{
					action: 'message',
					name: 'server',
					content: getGreeting(socketInfo),
				},
				socketInfo.channel
			);
		} else if (data.action === 'leave') {
			socketInfo.channel = socketInfo.name;
			ws.channelName = socketInfo.channel;
			broadcastChannel(
				{
					action: 'message',
					name: 'server',
					content: `@${socketInfo.name} just left the room :(`,
				},
				socketInfo.channel
			);
		} else if (data.action === 'set-name') {
			const prev = socketInfo.name;
			socketInfo.name = data.name;
			broadcastChannel(
				{
					action: 'message',
					name: 'server',
					content: `@${prev} is now @${socketInfo.name}`,
				},
				socketInfo.channel
			);
		} else if (data.action === 'roll') {
			data.max = Array.isArray(data.max) ? data.max : [6];
			broadcastChannel(
				{ roles: data.max.map(makeRandom), action: 'roll' },
				socketInfo.channel
			);
		}
	});
});

function getGreeting(socketInfo) {
	return pickRandom([
		`oh hai @${socketInfo.name}!`,
		`@${socketInfo.name} is here! everybody look busy!`,
		`hey there @${socketInfo.name}`,
		`we were wondering when you'd show up @${socketInfo.name}`,
		`welcome @${socketInfo.name}.`,
	]);
}

// function broadcast(data) {
// 	if (!wss.clients || !wss.clients.length) {
// 		return;
// 	}
// 	data.id = uuidv4();
// 	data.timestamp = Date.now();
// 	const json = JSON.stringify(data);
// 	wss.clients.forEach((client) => {
// 		if (client.readyState === WebSocket.OPEN) {
// 			client.send(json);
// 		}
// 	});
// }

function broadcastChannel(data, channelName) {
	if (!wss.clients) {
		return;
	}
	data.id = uuidv4();
	data.timestamp = Date.now();
	const json = JSON.stringify(data);
	wss.clients.forEach((client) => {
		if (
			client.readyState === WebSocket.OPEN &&
			client.channelName === channelName
		) {
			client.send(json);
		}
	});
}

function pickRandom(arr) {
	const i = ~~(Math.random() * arr.length);
	return arr[i];
}

function makeRandom(max) {
	return ~~(Math.random() * Math.min(max, 1000)) + 1;
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

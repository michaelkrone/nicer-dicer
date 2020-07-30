import WebSocket from 'ws';
import Moniker from 'moniker';
import { pickRandom, uuidv4, makeRandom } from '../shared/utils';

let wss;

export function initWebsocket(server) {
	wss = new WebSocket.Server({
		server,
	});

	wss.on('connection', (ws) => {
		let socketInfo = {
			name: Moniker.choose(),
			channel: uuidv4(),
			id: uuidv4(),
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
					name: data.name || socketInfo.name,
					channel: data.channel || socketInfo.channel,
				};
				if (ws.channelName !== socketInfo.channel) {
					ws.channelName = socketInfo.channel;
					broadcastChannel(
						{
							action: 'joined',
							name: 'server',
							username: socketInfo.name,
							channel: socketInfo.channel,
							content: getGreeting(socketInfo),
						},
						socketInfo.channel
					);
				}
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
					{ name: socketInfo.name, id: socketInfo.id, action: 'rolling' },
					socketInfo.channel
				);
				const roles = data.max.map(makeRandom);
				setTimeout(() => {
					send({ roles, action: 'set-roll' }, ws);
					broadcastChannel(
						{ roles, action: 'roll-result' },
						socketInfo.channel
					);
				}, Math.random() * 1200);
			}
		});
	});
}

function getGreeting(socketInfo) {
	return pickRandom([
		`oh hai @${socketInfo.name}!`,
		`@${socketInfo.name} is here! everybody look busy!`,
		`hey there @${socketInfo.name}`,
		`we were wondering when you'd show up @${socketInfo.name}`,
		`welcome @${socketInfo.name}.`,
	]);
}

function send(data, client) {
	data.id = uuidv4();
	data.timestamp = Date.now();
	client.send(JSON.stringify(data));
}

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

// function broadcast(data) {
// 	if (!wss.clients) {
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

import * as http from 'http';
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
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
	// ws.send(JSON.stringify(message_history));

	let name;

	ws.on('close', () => {
		broadcast({
			action: 'message',
			name: 'sapperchatbot',
			content: `@${name} just left the server :(`,
		});
	});

	ws.on('message', (json) => {
		const data = JSON.parse(json);

		if (data.action === 'join') {
			name = data.name;

			setTimeout(() => {
				const greeting = pickRandom([
					`oh hai @${name}!`,
					`@${name} is here! everybody look busy!`,
					`hey there @${name}`,
					`we were wondering when you'd show up @${name}`,
					` 👋 @${name}`,
				]);

				broadcast({
					action: 'message',
					name: 'sapperchatbot',
					content: greeting,
				});
			}, 1500 + Math.random() * 2000);
		}

		broadcast({ roles: [~~(Math.random() * 6) + 1] });
	});
});

function broadcast(data) {
	data.id = uuidv4();
	data.timestamp = Date.now();

	// message_history.push(data);

	const json = JSON.stringify(data);

	wss.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(json);
		}
	});
}

function pickRandom(arr) {
	const i = ~~(Math.random() * arr.length);
	return arr[i];
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

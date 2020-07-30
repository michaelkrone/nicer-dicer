<script>
	import { onMount } from 'svelte';
	import NumberDisplay from '../components/NumberList.svelte';
	import ws from '../client/websocket';

	let numbers;
	let rolling = false;
	export let dices = [100, 6];

	onMount(async () => {
		const socket = await ws.joinChannel();
		socket.addEventListener('message', (event) => {
			const data = JSON.parse(event.data);
			if (data.action === 'roll') {
				numbers = data.roles;
				rolling = false;
			}
		});
	});

	async function roll() {
		if (rolling) {
			return;
		}
		rolling = true;
		await ws.roll(dices);
	}
</script>

<svelte:head>
	<title>Roll dices nicest</title>
</svelte:head>

<div>
	<NumberDisplay {numbers} {dices} />
</div>

<div class="rounded-md shadow mt-6 sm:mt-8 md:mt-10">
	<button
		on:click={roll}
		disabled={rolling ? 'true' : undefined}
		class="primary w-full flex items-center justify-center px-8 py-3 text-base
		leading-6 font-medium rounded-md md:py-4 md:text-lg md:px-10">
		Roll!
	</button>
</div>

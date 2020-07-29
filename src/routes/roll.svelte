<script>
	import { onMount } from 'svelte';
	import { initWebsocket, send, get } from '../util/websocket';
	import NumberDisplay from '../components/NumberDisplay.svelte';

	onMount(() => initWebsocket());
	let number = 0;

	function roll() {
		send({ roll: true });
		get().addEventListener('message', (event) => {
			const data = JSON.parse(event.data);
			number = data.roles[0];
		});
	}
</script>

<svelte:head>
	<title>Roll a dice</title>
</svelte:head>

<main>
	<div
		class="flex flex-wrap -mx-2 -my-2 md:-mx-4 md:-my-4 justify-center
		lg:justify-start">
		<div class="px-2 py-2 md:px-4 md:py-4">
			<NumberDisplay {number} />
		</div>

	</div>

	<div class="rounded-md shadow mt-6 sm:mt-8 md:mt-10">
		<button
			on:click={roll}
			class="w-full flex items-center justify-center px-8 py-3 border
			border-transparent text-base leading-6 font-medium rounded-md text-white
			bg-indigo-600 hover:bg-indigo-500 focus:outline-none
			focus:border-indigo-700 focus:shadow-outline-indigo transition
			duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
			Roll!
		</button>
	</div>
</main>

<script>
	import { onMount } from 'svelte';
	import NumberDisplay from '../components/NumberList.svelte';
	import { random, roles, numbers, channel, username } from '../client/stores';
	import { roll, joinChannel, isAction, getData } from '../client/websocket';

	export let dices = [6, 6];

	let rolling = false;
	let rand = random(dices);

	onMount(async () => {
		(await joinChannel($username, $channel)).addEventListener(
			'message',
			(event) => {
				if (isAction(event, 'joined')) {
					$channel = getData(event).channel;
					$username = getData(event).username;
				} else if (isAction(event, 'set-roll')) {
					$roles += 1;
					$numbers = getData(event).roles;
					rolling = false;
				}
			}
		);
	});

	function getNumbers() {
		if (!rolling) {
			rolling = true;
			roll(dices).catch(() => (rolling = false));
		}
	}
</script>

<svelte:head>
	<title>Roll dices nicest</title>
</svelte:head>
<div>
	<NumberDisplay numbers={rolling ? $rand : $numbers} {dices} />
</div>

<div class="rounded-md shadow mt-6 sm:mt-8 md:mt-10">
	<button
		on:click={getNumbers}
		disabled={rolling ? 'true' : undefined}
		class="primary w-full flex items-center justify-center px-8 py-3 text-base
		leading-6 font-medium rounded-md md:py-4 md:text-lg md:px-10">
		{#if rolling}Rolling &hellip;{:else}Roll{/if}
	</button>
</div>

<div
	class:hidden={!$username}
	class="text-center mt-6 lg:mt-8 rounded-md bg-gray-100 border-1
	border-gray-300 text-gray-500 font-light text-xs p-2">
	<span class="mr-2">
		Username:
		<span class="font-bold">@{$username}</span>
	</span>
	<span>
		<br class="md:hidden" />
		Channel: {$channel}
	</span>
</div>

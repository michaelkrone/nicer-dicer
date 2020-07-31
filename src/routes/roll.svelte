<script>
	import NumberDisplay from '../components/NumberList.svelte';
	import { random } from '../client/stores';
	import { makeRandom } from '../shared/utils';

	export let dices = [
		{ max: 6, name: 'Common D6' },
		{ max: 6, name: 'D6 of Power' },
		{ max: 6, name: 'D6 of Mana' },
	];

	let numbers = dices.map(() => '?');
	let rolling = false;
	let rand;
	$: rand = random(dices.map((d) => d.max));

	function roll() {
		if (!rolling) {
			rolling = true;
			setTimeout(() => {
				numbers = dices.map((d) => d.max).map(makeRandom);
				rolling = false;
			}, Math.random() * 1400);
		}
	}
</script>

<svelte:head>
	<title>Roll dices nicest</title>
</svelte:head>

<div>
	<NumberDisplay numbers={rolling ? $rand : numbers} {dices} />
</div>

<div
	class="fixed bottom-0 right-0 left-0 pb-2 px-2 w-full sm:relative sm:flex mt-6
	justify-center sm:mt-8 md:mt-10">
	<button
		on:click={roll}
		disabled={rolling ? 'true' : undefined}
		class="p-8 sm:p-4 primary w-full flex items-center justify-center text-base
		leading-6 font-medium rounded-md md:text-lg md:px-10 sm:max-w-screen-sm">
		{#if rolling}Rolling &hellip;{:else}Roll{/if}
	</button>
</div>

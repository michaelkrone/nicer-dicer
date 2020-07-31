<script>
	import NumberDisplay from '../components/NumberList.svelte';
	import { random } from '../client/stores';
	import { makeRandom } from '../shared/utils';

	export let dices = [6, 6, 6];

	let numbers = dices.map(() => '?');
	let rolling = false;
	let rand = random(dices);

	function roll() {
		if (!rolling) {
			rolling = true;
			setTimeout(() => {
				numbers = dices.map(makeRandom);
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

<div class="rounded-md shadow mt-6 sm:mt-8 md:mt-10">
	<button
		on:click={roll}
		disabled={rolling ? 'true' : undefined}
		class="fixed bottom-0 right-0 left-0 p-6 sm:p-4 sm:relative primary w-full
		flex items-center justify-center text-base leading-6 font-medium rounded-md
		md:text-lg md:px-10">
		{#if rolling}Rolling &hellip;{:else}Roll{/if}
	</button>
</div>

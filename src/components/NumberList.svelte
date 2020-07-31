<script>
	import NumberDisplay from '../components/NumberDisplay.svelte';
	import DiceAvatar from './DiceAvatar.svelte';
	export let dices = ['?'];
	export let numbers = ['?'];
	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 xl:gap-8">

	{#each numbers as number, i (i)}
		<div
			class="rounded-md bg-white shadow max-w-full flex justify-between
			items-center">
			<DiceAvatar count={dices[i]} />
			<NumberDisplay {number} />
		</div>
	{/each}
</div>

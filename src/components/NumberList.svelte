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

<div class="grid grid-cols-1 gap-4">
	{#each numbers as number, i (i)}
		<div
			class="rounded-md bg-white shadow max-w-full flex justify-start
			items-center">
			<DiceAvatar count={dices[i]} />
			<p
				class="text-xs md:text-sm text-gray-500 flex-1 font-light md:font-normal">
				{formatter.format(new Date())} - thrown 2 times
			</p>
			<NumberDisplay {number} />
		</div>
	{/each}
</div>

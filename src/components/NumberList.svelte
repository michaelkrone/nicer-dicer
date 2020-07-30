<script>
	import NumberDisplay from '../components/NumberDisplay.svelte';
	export let dices = ['?'];
	export let numbers = ['?'];
</script>

<div class="grid grid-cols-1 gap-4">
	{#each numbers as number, i (i)}
		<div
			class="rounded-md bg-white shadow max-w-full flex justify-start
			items-center">
			<div
				class="bg-gray-200 text-gray-600 h-16 w-16 mx-4 rounded-full flex
				items-center justify-center font-thin text-sm md:text-base">
				<span>D{dices[i]}</span>
			</div>
			<p class="text-sm text-gray-500 flex-1 font-thin md:font-light">
				14:23 - thrown 2 times
				<br />
				Average: 36
			</p>
			<NumberDisplay {number} />
		</div>
	{/each}
</div>

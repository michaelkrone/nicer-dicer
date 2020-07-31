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

<!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 xl:gap-8"> -->
<div class="-mx-2 -my-2 sm:-mx-3 sm:-my-3 md:-mx-4 md:-my-4 lg:-mx-5 lg:-my-5">

	{#each numbers as number, i (i)}
		<div class="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-5">
			<div class="rounded-md bg-white shadow flex justify-between items-center">
				<DiceAvatar count={dices[i].max} />
				<div class="flex-1 m-2 md:m-3 lg:m-4">
					<p class="self-start text-base leading-6 font-medium text-gray-900">
						{dices[i].name}
					</p>
					<p class="hidden md:block text-sm leading-5 text-gray-500">
						{formatter.format(new Date())} - average 3 - 43 throws
					</p>
				</div>
				<NumberDisplay {number} />
			</div>
		</div>
	{/each}
</div>

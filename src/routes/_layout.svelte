<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>

</style>

<Nav {segment} />

<header class="bg-white shadow">
	<div class="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold leading-tight text-gray-900">
			{(segment || 'start').toUpperCase()}
		</h1>
	</div>
</header>
<main>
	<div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
		<!-- Replace with your content -->

		<div class="bg-white overflow-hidden">
			<div class="max-w-screen-xl mx-auto">
				<div
					class="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full
					lg:pb-28 xl:pb-32 mb-10 mx-auto px-4 sm:mb-12 sm:px-6 md:mb-16
					lg:mb-20 lg:px-8 xl:mb-28 ">
					<slot />
				</div>
			</div>
		</div>
		<!-- /End replace -->
	</div>
</main>

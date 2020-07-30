<script>
	import Nav from '../components/Nav.svelte';
	import routes from './_router-links';
	import Toast from '../components/Toast.svelte';

	export let segment;
</script>

<style>

</style>

<header class="shadow">
	<Nav {routes} {segment} />
</header>

<main class="max-w-full mx-auto py-6 sm:px-6 lg:px-24">

	<div class="overflow-hidden max-w-screen-xl mx-auto">
		<div
			class="z-10 pb-16 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full
			lg:pb-28 xl:pb-32 mb-10 mx-auto px-4 sm:mb-12 sm:px-6 md:mb-16 lg:mb-20
			lg:px-8 xl:mb-28 ">
			<!-- content -->
			<slot />
			<!-- /content -->
		</div>

	</div>
</main>

<!-- <Toast title="test" text="text" /> -->

<script>
	import Nav from '../components/Nav.svelte';
	import routes from './_router-links';
	import Toast from '../components/Toast.svelte';

	export let segment;
</script>

<style>

</style>

<main class="max-w-full h-screen mx-auto bg-gray-100">
	<header class="shadow">
		<Nav {routes} {segment} />
	</header>

	<div class="overflow-hidden mx-auto py-6 sm:px-6 lg:px-20">
		<div
			class="z-10 lg:max-w-6xl lg:pt-20 xl:pt-24 mb-10 mx-auto px-4 sm:mt-8
			md:mt-10 sm:px-6 lg:px-8">
			<!-- content -->
			<slot />
			<!-- /content -->
		</div>

	</div>
</main>

<!-- <Toast title="test" text="text" /> -->

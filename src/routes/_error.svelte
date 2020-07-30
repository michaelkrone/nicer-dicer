<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>

</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>
<h2
	class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900
	sm:text-5xl sm:leading-none md:text-6xl">
	{status}
	<br class="xl:hidden" />
	<span class="text-indigo-600">... happens</span>
</h2>

<p class="mt-4">
	The server responded with error
	<b class="font-bold">{error.message}</b>
</p>
<p>This may happen, life goes on.</p>

<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
	<div class="rounded-md shadow">
		<a
			href="./"
			class="w-full flex items-center justify-center px-8 py-3 border
			border-transparent text-base leading-6 font-medium rounded-md text-white
			bg-indigo-600 hover:bg-indigo-500 focus:outline-none
			focus:border-indigo-700 focus:shadow-outline-indigo transition
			duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
			Go to the start page
		</a>
	</div>

</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

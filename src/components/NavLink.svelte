<script>
	export let current;
	export let link;
	export let text;
</script>

<style>
	.nav-item {
		@apply ml-4 px-3 py-2 rounded-md text-sm font-medium text-indigo-100;
	}

	.nav-item:hover {
		@apply text-white bg-indigo-700;
	}

	.nav-item:focus {
		@apply outline-none text-white bg-indigo-700;
	}

	[aria-current] {
		@apply px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-900;
	}

	[aria-current]:focus {
		@apply outline-none text-white bg-indigo-700;
	}
</style>

<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
	the blog data when we hover over the link or tap it on a touchscreen
<a
	rel="prefetch"
	aria-current={segment === 'blog' ? 'page' : undefined}
	href="blog">
	blog
</a>
-->

<a aria-current={current ? 'page' : undefined} href={link} class="nav-item">
	{text}
</a>

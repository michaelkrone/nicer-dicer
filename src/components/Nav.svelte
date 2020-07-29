<script>
	export let segment;
	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
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
		     the blog data when we hover over the link or tap it on a touchscreen -->
<!-- <li>
			<a
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog">
				blog
			</a>
		</li> -->

<nav class="bg-indigo-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<img
						class="h-8 w-8"
						src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
						alt="Workflow logo" />
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline">
						<a
							aria-current={segment === undefined ? 'page' : undefined}
							href="."
							class="nav-item">
							Start
						</a>
						<a
							aria-current={segment === 'roll' ? 'page' : undefined}
							href="roll"
							class="nav-item">
							Roll
						</a>
						<a
							aria-current={segment === 'about' ? 'page' : undefined}
							href="about"
							class="nav-item">
							About
						</a>
					</div>
				</div>
			</div>
			<div class="hidden md:block">
				<div class="ml-4 flex items-center md:ml-6">
					<button
						class="p-1 border-2 border-transparent text-indigo-400 rounded-full
						hover:text-white focus:outline-none focus:text-white
						focus:bg-indigo-700"
						aria-label="Notifications">
						<svg
							class="h-6 w-6"
							stroke="currentColor"
							fill="none"
							viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002
								6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6
								11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6
								0v-1m6 0H9" />
						</svg>
					</button>

				</div>
			</div>
			<div class="-mr-2 flex md:hidden">
				<!-- Mobile menu button -->
				<button
					on:click={toggleMenu}
					class="inline-flex items-center justify-center p-2 rounded-md
					text-indigo-400 hover:text-white hover:bg-indigo-700
					focus:outline-none focus:bg-indigo-700 focus:text-white">
					<!-- Menu open: "hidden", Menu closed: "block" -->
					<svg
						class="block h-6 w-6"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<!-- Menu open: "block", Menu closed: "hidden" -->
					<svg
						class="hidden h-6 w-6"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!--
		Mobile menu, toggle classes based on menu state.

		Open: "block", closed: "hidden"
	  -->
	<div class="block md:hidden" class:hidden={!menuOpen}>
		<div class="px-2 pt-2 pb-3 sm:px-3">
			<a
				aria-current={segment === undefined ? 'page' : undefined}
				href="."
				class="block nav-item">
				Start
			</a>
			<a
				aria-current={segment === 'roll' ? 'page' : undefined}
				href="roll"
				class="block nav-item">
				Roll
			</a>
			<a
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about"
				class="block nav-item">
				About
			</a>
		</div>
	</div>
</nav>

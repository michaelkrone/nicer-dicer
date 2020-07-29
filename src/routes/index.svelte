<svelte:head>
	<title>Nicer Dicer</title>
</svelte:head>
<main>
	<div class="sm:text-center lg:text-left">
		<h2
			class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900
			sm:text-5xl sm:leading-none md:text-6xl">
			Nicer Dicer
			<br class="xl:hidden" />
			<span class="text-indigo-600">rolls dices nicer!</span>
		</h2>
		<p
			class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl
			sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
			Nicer Dicer generates numbers with server side randomness. Alone or with
			your friends. Start now. It's free.
		</p>
		<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
			<div class="rounded-md shadow">
				<a
					href="/roll"
					class="w-full flex items-center justify-center px-8 py-3 border
					border-transparent text-base leading-6 font-medium rounded-md
					text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none
					focus:border-indigo-700 focus:shadow-outline-indigo transition
					duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
					Roll the dice
				</a>
			</div>
			<div class="mt-3 sm:mt-0 sm:ml-3">
				<a
					href="/roll"
					class="w-full flex items-center justify-center px-8 py-3 border
					border-transparent text-base leading-6 font-medium rounded-md
					text-white bg-yellow-500 hover:border-yellow-500 hover:text-yellow-500
					hover:bg-yellow-200 focus:outline-none focus:shadow-outline-yellow
					focus:border-yellow-300 transition duration-150 ease-in-out md:py-4
					md:text-lg md:px-10">
					Dice with friends
				</a>
			</div>
		</div>
	</div>
</main>

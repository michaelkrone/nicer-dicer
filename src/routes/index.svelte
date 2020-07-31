<svelte:head>
	<title>Nicer Dicer</title>
</svelte:head>

<div class="sm:text-center lg:text-left">
	<h2
		class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900
		sm:text-5xl sm:leading-none md:text-6xl">
		Nicer Dicer
		<br class="xl:hidden" />
		<span class="text-indigo-600">rolls dices nicer!</span>
	</h2>
	<p
		class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 sm:mt-5 sm:text-lg
		sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
		Nicer Dicer generates numbers so random, you can hardly guess them. Invite
		friends and show them your dice skills.
		<br class="hidden xl:block" />
		<b>Be nice!</b>
	</p>
	<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
		<div class="rounded-md shadow">
			<a
				href="/roll"
				class="primary w-full flex items-center justify-center px-8 py-3
				text-base leading-6 font-medium rounded-md md:py-4 md:text-lg md:px-10">
				Start dicing
			</a>
		</div>
		<!-- <div class="mt-3 sm:mt-0 sm:ml-3">
			<a
				href="/roll"
				class="accent w-full flex items-center justify-center px-8 py-3 border
				text-base leading-6 font-medium rounded-md md:py-4 md:text-lg md:px-10">
				Dice with friends
			</a>
		</div> -->
	</div>
</div>

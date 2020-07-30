<script>
	export let title = '';
	export let text = '';
</script>

<div
	class="bg-orange-500 bottom-0 right-0 mb-4 mr-4 sm:right-0 block absolute z-50
	text-sm max-w-screen-sm text-left no-underline break-words border-l border-r
	border-b border-orange-500 rounded-lg overflow-hidden">
	<div
		class="flex justify-between items-center bg-orange-500 text-orange-100
		opacity-75 font-semibold p-3 mb-0 uppercase ">
		<div class="mr-8">{title}</div>
		<button
			class="accent uppercase w-full flex items-center justify-center px-2 py-2
			rounded-md focus:outline-none">
			<svg
				class="block h-6 w-6"
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
	<div class="bg-white text-orange-500 font-normal leading-normal p-3">
		{text}
	</div>
</div>

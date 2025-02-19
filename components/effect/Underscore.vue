<template>
	<div
		class="relative font-matrix inline-block text-matrix hover:text-white group transition-all duration-200 ease-in uppercase"
	>
		<slot />
		<span
			class="absolute left-0 bottom-0 h-0.5 bg-matrix w-full transition-all duration-200 ease-in transform scale-x-100 group-hover:scale-x-50 group-hover:translate-y-1"
		></span>
	</div>
</template>

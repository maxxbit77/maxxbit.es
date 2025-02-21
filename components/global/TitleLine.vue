<script setup></script>

<template>
	<div class="relative flex items-center justify-center w-full">
		<div class="absolute w-full h-[2px] bg-matrix fade-mask"></div>

		<h2 class="relative px-2 bg-slate-950 uppercase text-3xl text-white font-matrix text-center">
			<slot />
		</h2>
	</div>
</template>

<style scoped>
.fade-mask {
	background: linear-gradient(to right, transparent, #31d3a2 30%, #31d3a2 70%, transparent);
}
</style>

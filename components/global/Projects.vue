<script setup>
const data = computed(() => usePortfolioInfo().projects)
</script>

<template>
	<div>
		<section class="py-12">
			<div class="uppercase text-3xl text-white font-matrix">
				What's Coming...
				<div class="border border-secondary-400 w-full" />
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				<CardProject v-for="(item, index) in data" :key="index" v-bind="item" />
			</div>
		</section>
	</div>
</template>

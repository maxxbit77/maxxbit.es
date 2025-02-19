<script setup>
const data = computed(() => usePortfolioInfo().projects)
</script>

<template>
	<div>
		<section class="py-12">
			<!-- Título -->
			<div class="uppercase text-2xl text-white">
				Projects
				<div class="border border-secondary-400 w-full" />
			</div>

			<!-- Grid -->
			<div id="projects" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				<CardProject v-for="(item, index) in data" :key="index" v-bind="item" />
			</div>
		</section>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Array,
})
</script>
<template>
	<div>
		<section class="mt-24">
			<div class="uppercase text-3xl text-white font-matrix">
				Professional Experience
				<div class="border border-secondary-400 w-full" />
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				<CardExperience v-for="(item, index) in data" :key="index" v-bind="item" />
			</div>
		</section>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Array,
})
const duplicatedItems = computed(() => [...props.data, ...props.data, ...props.data])

const carousel = ref(null)
</script>

<template>
	<div>
		<div class="uppercase text-3xl text-white font-matrix">
			Crash Courses
			<div class="border border-secondary-400 w-full" />
		</div>
		<div class="w-full mt-6">
			<div ref="carousel" class="flex gap-4 animate-marquee">
				<CardCourse v-if="data" v-for="(item, index) in duplicatedItems" :key="index" v-bind="item" />
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes marquee {
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(-70%);
	}
}

.animate-marquee {
	display: flex;
	min-width: 500%; /* Asegura que el contenido extra no se corte */
	animation: marquee 30s linear infinite;
}
</style>

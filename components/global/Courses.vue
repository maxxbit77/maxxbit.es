<script setup>
const props = defineProps({
	data: Array,
})
const duplicatedItems = computed(() => [...props.data, ...props.data, ...props.data])

const carousel = ref(null)
</script>
<template>
	<div class="relative h-[600px] overflow-hidden w-full">
		<div class="flex justify-center items-center space-x-1">
			<TitleLine>Level Up Academy 🏆</TitleLine>
		</div>

		<SvgGradientMatrixCircle class="absolute z-10 top-28 left-1/2 w-full h-[300px] blur-2xl -translate-x-1/2" />

		<div class="relative mt-6 z-20 overflow-hidden w-full fade-mask">
			<div ref="carousel" class="flex gap-4 animate-marquee w-[300%]">
				<CardCourse v-for="(item, index) in duplicatedItems" :key="index" v-bind="item" />
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
		transform: translateX(-100%);
	}
}

.animate-marquee {
	display: flex;
	width: 300%;
	animation: marquee 30s linear infinite;
}

.fade-mask {
	-webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
	mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
}
</style>

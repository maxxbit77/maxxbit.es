<script setup>
const props = defineProps({
	title: String,
	items: Array,
})

const isOpen = ref(false)

const toggle = () => {
	isOpen.value = !isOpen.value
}
</script>

<template>
	<div class="cursor-pointer">
		<button @click="toggle" class="flex items-center text-white font-semibold relative z-30 space-x-1">
			<span class="text-accent font-matrix text-sm">{{ title }}</span>
			<span class="transition-transform duration-300" :class="{ 'rotate-90': isOpen }">
				<Icon name="material-symbols:arrow-forward-ios" class="size-3 text-matrix" />
			</span>
		</button>

		<Transition name="fade">
			<ul v-show="isOpen" class="p-1 bg-slate-950 text-gray-300 transition-all space-y-1">
				<li v-for="(item, index) in items" :key="index" class="text-xs">· {{ item }}</li>
			</ul>
		</Transition>
	</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

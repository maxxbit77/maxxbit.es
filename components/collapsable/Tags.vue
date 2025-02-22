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
			<div v-show="isOpen" class="flex flex-wrap gap-2 mt-2">
				<span v-for="tag in items" :key="tag" class="text-[10px] py-1 rounded-lg text-matrix">
					<span
						class="border border-matrix rounded-xl px-2 py-1"
						v-if="tag"
						:href="`https://www.google.com/search?q=${tag}`"
						target="_blank"
					>
						{{ tag }}
					</span>
				</span>
			</div>
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

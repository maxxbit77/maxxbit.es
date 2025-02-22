<script setup>
const props = defineProps({
	data: Object,
})

let categories = { ...props.data }
const iconsQuantityToShow = ref(6)
const showAll = ref(false)

const categoriesIconsFilteredByQuantity = computed(() => {
	if (showAll.value) {
		return categories
	} else {
		categories = { ...props.data }
		return Object.fromEntries(
			Object.entries(categories).map(([category, icons]) => [category, icons.slice(0, iconsQuantityToShow.value)])
		)
	}
})

const toggleShowAll = () => {
	showAll.value = !showAll.value
	if (!showAll.value) {
		categories.value = { ...props.data }
	}
}

onMounted(() => {
	if (window.innerWidth < 800) iconsQuantityToShow.value = 3
})
</script>

<template>
	<div class="flex flex-col space-y-8 relative">
		<button
			class="text-xs cursor-pointer absolute left-0 md:left-20 -top-10 sm:-top-11 z-10 border rounded-lg transition-all hover:bg-gray-500"
			@click="toggleShowAll"
			:class="{ 'bg-accent text-white': showAll }"
		>
			<div class="relative w-14 h-14">
				<Transition name="flip">
					<Icon
						v-if="!showAll"
						name="material-symbols:multimodal-hand-eye"
						key="show"
						class="size-14 p-2 border-white text-accent absolute inset-0"
					/>
				</Transition>

				<Transition name="flip">
					<Icon
						v-if="showAll"
						key="hide"
						name="material-symbols:disabled-visible-rounded"
						class="size-14 p-2 text-white absolute inset-0"
					/>
				</Transition>
			</div>
		</button>

		<div v-for="(icons, category) in categoriesIconsFilteredByQuantity" :key="category">
			<div class="flex justify-between space-x-1 items-center">
				<h3 class="text-xl font-bold text-white mb-2">{{ category }}</h3>
			</div>
			<div class="w-full">
				<ul class="flex flex-wrap gap-2">
					<li
						v-for="(icon, index) in icons"
						:key="index"
						class="w-28 p-2 bg-slate-800 rounded-lg grid grid-row h-32"
					>
						<p class="text-matrix text-center font-matrix">{{ icon.name }}</p>
						<component :is="icon.component" class="size-12 mx-auto" />
						<div class="flex justify-between">
							<span class="text-xs text-gray-400">Skill</span>
							<span class="text-xs text-gray-400">{{ icon.skill }}%</span>
						</div>
						<ProgressRoot :value="icon.skill" class="h-1 w-full bg-gray-700 rounded">
							<ProgressIndicator
								class="h-1 bg-matrix rounded transition-all duration-300"
								:style="{ width: `${icon.skill}%` }"
							/>
						</ProgressRoot>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
.flip-enter-active,
.flip-leave-active {
	transition:
		transform 0.6s ease,
		opacity 0.6s ease;
}
.flip-enter-from {
	transform: rotateY(90deg);
	opacity: 0;
}
.flip-leave-to {
	transform: rotateY(-90deg);
	opacity: 0;
}
</style>

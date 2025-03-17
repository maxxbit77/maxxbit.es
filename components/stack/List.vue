<script setup>
const props = defineProps({
	translations: Object,
	icons: Object,
	skillTxt: String,
})

let categories = { ...props.icons }
const iconsQuantityToShow = ref(6)
const showAll = ref(false)

const categoriesIconsFilteredByQuantity = computed(() => {
	if (showAll.value) {
		return categories
	} else {
		categories = { ...props.icons }
		return Object.fromEntries(
			Object.entries(categories).map(([category, icons]) => [category, icons.slice(0, iconsQuantityToShow.value)])
		)
	}
})

const toggleShowAll = () => {
	showAll.value = !showAll.value
	if (!showAll.value) {
		categories.value = { ...props.icons }
	}
}

onMounted(() => {
	if (window.innerWidth < 800) iconsQuantityToShow.value = 3
})
</script>

<template>
	<div class="flex flex-col space-y-8 relative">
		<div
			@click="toggleShowAll"
			class="text-sm text-accent font-matrix mr-8 absolute top-10 right-0 cursor-pointer flex justify-center items-center space-x-2"
		>
			<p>{{ !showAll ? translations.showMore : translations.showLess }}</p>
			<Icon
				name="material-symbols:arrow-forward-ios"
				class="size-3 transition-all"
				:class="{ 'rotate-90': showAll, 'rotate-0': !showAll }"
			/>
		</div>
		<div v-for="(icons, category) in categoriesIconsFilteredByQuantity" :key="category">
			<div class="flex justify-between items-center">
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
							<span class="text-xs text-gray-400">{{ skillTxt }}</span>
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

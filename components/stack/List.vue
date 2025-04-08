<script setup>
const props = defineProps({
	translations: Object,
	icons: Object,
	skillTxt: String,
})

let categories = { ...props.icons }
const iconsQuantityToShow = ref(6)
const showAll = ref(false)

const filteredCategories = computed(() => {
	const sortedCategories = Object.fromEntries(
		Object.entries(props.icons).map(([category, icons]) => [
			category,
			[...icons]
				.sort((a, b) => b.skill - a.skill)
				.slice(0, showAll.value ? icons.length : iconsQuantityToShow.value),
		])
	)

	return sortedCategories
})

const toggleShowAll = () => {
	showAll.value = !showAll.value
	if (!showAll.value) {
		categories.value = { ...props.icons }
	}
}
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
		<div v-for="(icons, category) in filteredCategories" :key="category">
			<div class="flex justify-between items-center">
				<h3 class="text-xl font-bold text-white mb-2">{{ category }}</h3>
			</div>
			<div class="w-full">
				<ul class="flex flex-wrap gap-2">
					<li
						v-for="(icon, index) in icons"
						:key="index"
						class="w-28 p-2 custom-blur rounded-lg grid grid-row h-32"
						:class="{
							'shadow-sm shadow-matrix': icon.skill >= 90,
							'shadow-sm shadow-accent': icon.skill >= 60,
							'shadow-sm shadow-blue-300': icon.skill < 60,
						}"
					>
						<p
							class="text-center font-matrix"
							:class="{
								'text-matrix': icon.skill >= 90,
								'text-accent': icon.skill >= 60,
								'text-blue-300': icon.skill < 60,
							}"
						>
							{{ icon.name }}
						</p>
						<component :is="icon.component" class="size-12 mx-auto" />
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

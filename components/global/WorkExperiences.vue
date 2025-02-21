<script setup>
const props = defineProps({
	data: Array,
})
const fullData = ref(props.data)
const showAll = ref(false)

const experienceData = computed(() => {
	if (!showAll.value) {
		return fullData.value.slice(0, 4)
	} else {
		return fullData.value
	}
})
</script>
<template>
	<div>
		<section class="mt-24">
			<TitleLine>XP Gained 🎮</TitleLine>
			<div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
				<CardExperience v-for="(item, index) in experienceData" :key="index" v-bind="item" />
			</div>
			<div
				@click="showAll = !showAll"
				class="text-accent font-matrix text-end cursor-pointer mt-2 transition-all"
			>
				{{ showAll ? '<< Show less' : 'Show more >>' }}
			</div>
		</section>
	</div>
</template>

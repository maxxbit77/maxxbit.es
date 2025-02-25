<script setup>
const props = defineProps({
	data: Object,
})
const fullData = ref(props.data.list)
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
		<div class="relative">
			<TitleLine>{{ data.title }}</TitleLine>
			<div
				class="absolute top-44 -left-24 z-0 w-[200px] h-[200px] bg-gradient-to-r from-matrix to-transparent blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"
			/>
			<div
				class="absolute top-[600px] left-44 z-0 w-[200px] h-[200px] bg-gradient-to-r from-matrix to-transparent blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"
			/>
			<div
				class="absolute -bottom-40 right-0 z-0 w-[200px] h-[200px] bg-gradient-to-r from-matrix to-transparent blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"
			/>
			<div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
				<CardExperience v-for="(item, index) in experienceData" :key="index" v-bind="item" />
			</div>
			<div
				@click="showAll = !showAll"
				class="text-accent font-matrix text-end cursor-pointer mt-2 transition-all absolute right-0 z-20"
			>
				{{ showAll ? data.show.less : data.show.more }}
			</div>
		</div>
	</div>
</template>

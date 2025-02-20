<script setup>
const props = defineProps({
	tags: Array || String,
})
</script>

<template>
	<div>
		<ul class="mt-2 flex flex-wrap gap-2">
			<li
				v-for="(item, index) in tags"
				:key="index"
				class="capitalize flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 text-matrix"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

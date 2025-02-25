<script setup>
const props = defineProps({
	data: Object,
})
</script>

<template>
	<div>
		<div class="flex justify-between items-center">
			<NavBarBrand />
			<ul class="text-gray-500 hidden lg:flex justify-end items-center gap-x-6">
				<li v-for="(item, index) in data.items" :key="index" class="hover:text-matrix-300">
					<NuxtLink :to="item.url">
						{{ item.text }}
					</NuxtLink>
				</li>
			</ul>
			<LangSwitch />
		</div>
	</div>
</template>

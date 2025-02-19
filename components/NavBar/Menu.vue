<script setup>
const { navBar } = usePortfolioInfo()
const { items } = navBar
</script>
<template>
	<ul class="text-gray-400 hidden lg:flex justify-end items-center gap-x-6">
		<li v-for="(item, index) in items" :key="index" class="hover:text-matrix-300">
			<NuxtLink :to="item.url">
				{{ item.text }}
			</NuxtLink>
		</li>
	</ul>
</template>

<script setup>
const { myInfo } = usePortfolioInfo()
const { name, occupation, slogan, nickName, presentation } = myInfo
</script>

<template>
	<div class="my-12 md:my-0 flex flex-col space-y-2">
		<div class="flex space-x-2 items-center">
			<h2 class="text-4xl font-matrix text-matrix uppercase">{{ name }}</h2>
			<p class="text-gray-500 font-matrix pt-2">/ {{ nickName }}</p>
		</div>
		<h1 class="text-secondary-100 text-4xl uppercase font-matrix">
			{{ occupation }}
			{{ slogan }}
		</h1>
		<p class="text-secondary-400 text-4xl uppercase font-matrix"></p>
		<p class="text-gray-400">
			Building fast apps that feel like a physical extension of your mind with considerate motion design for fluid
			interfaces.
		</p>
		<p class="text-gray-400">
			I’m the person who can
			<span class="text-white font-bold">bridge the gap between design and engineering</span>
			to give your product that extra attention to detail to
			<span class="text-white font-bold">stand out from competitors. 🚀</span>
		</p>
	</div>
</template>

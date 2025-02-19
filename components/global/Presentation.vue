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
		<div>
			<h1 class="text-secondary-100 text-4xl uppercase font-matrix">
				{{ occupation }}
			</h1>
			<h2 class="text-secondary-100 text-2xl uppercase font-matrix">
				{{ slogan }}
			</h2>
		</div>
		<p class="text-secondary-400 text-4xl uppercase font-matrix"></p>
		<p class="text-gray-400">
			I build fast, intuitive apps that feel like a natural extension of your mind, using thoughtful motion design
			to create fluid, seamless interfaces.
		</p>
		<p class="text-gray-400">
			<span class="text-white font-bold">I bridge the gap between design and engineering</span>
			, ensuring your product gets the extra attention to detail it needs to
			<span class="text-white font-bold">stand out from competitors. 🚀</span>
		</p>
	</div>
</template>

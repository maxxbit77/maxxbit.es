<script setup>
const { myInfo } = usePortfolioInfo()
const { name, occupation, slogan } = myInfo
</script>

<template>
	<div>
		<div class="my-12 md:my-0">
			<h1 class="text-white text-6xl">{{ name }}</h1>
			<h2 class="text-secondary-400 text-2xl  uppercase">
				{{ occupation }}
			</h2>
			<p class="text-white w-2/3 mx-auto md:m-0">
				{{ slogan }}
			</p>
		</div>
	</div>
</template>

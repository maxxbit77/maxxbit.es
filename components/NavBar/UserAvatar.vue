<script setup>
const { navBar } = usePortfolioInfo()
const { userLogo } = navBar
</script>

<template>
	<div class="hidden lg:flex justify-end items-center">
		<div class="hidden lg:flex justify-end items-center">
			<img
				:src="userLogo"
				class="h-10 rounded-full border border-gray-500 p-0.5"
				alt=""
			/>
		</div>
	</div>
</template>

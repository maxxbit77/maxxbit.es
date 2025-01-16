<script setup>
const { myInfo } = usePortfolioInfo()
const image = myInfo.image
</script>
<template>
		<div class="flex justify-center md:justify-start md:ml-6 ">
			<div class="border w-44 h-44 rounded-full border-gray-700">
				<img :src="image" alt="profile image"/>
			</div>
		</div>
</template>

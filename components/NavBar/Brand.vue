<script lang="ts" setup="">
const { navBar } = usePortfolioEN()
const { logo } = navBar
</script>
<template>
	<div>
		<a href="/#">
			<img :src="logo" alt="Brand logo" class="h-16 w-full" />
		</a>
	</div>
</template>

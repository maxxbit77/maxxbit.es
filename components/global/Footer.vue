<script setup>
const { navBar } = usePortfolioEN()
const { items, logo } = navBar
</script>

<template>
	<div>
		<div class="w-full bg-slate-800 min-h-52">
			<div class="flex justify-center pt-6">
				<a href="/#">
					<img :src="logo" class="h-16" alt="" />
				</a>
			</div>
			<ul class="text-gray-400 my-4 flex justify-center items-center gap-x-6">
				<li v-for="(item, index) in items" :key="index">
					<NuxtLink :to="item.url">
						{{ item.text }}
					</NuxtLink>
				</li>
			</ul>
			<div class="text-center text-gray-400">Made with ❤️ by Maxxbit.dev</div>
		</div>
	</div>
</template>

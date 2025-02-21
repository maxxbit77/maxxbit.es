<script setup>
const props = defineProps({
	courseName: String,
	author: String,
	duration: String,
	lessons: String,
	rating: Number,
	image: {
		url: String,
		alt: String,
	},
	status: String,
	url: String,
	tags: Array,
})
</script>

<template>
	<div class="bg-black rounded-xl transform mx-auto transition duration-300 p-4 border border-gray-800">
		<a :href="url">
			<div class="relative overflow-hidden w-[250px]">
				<img v-if="image" class="w-full h-44 rounded-lg" :src="image.url" :alt="image.alt" loading="lazy" />
				<span
					class="border-accent font-matrix absolute top-4 -right-12 w-44 text-center rotate-[40deg] border-4 bg-matrix text-black font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg"
				>
					{{ status }}
				</span>
			</div>
			<h1 class="mt-4 text-white font-bold cursor-pointer font-matrix">
				{{ courseName }}
			</h1>
			<div class="flex items-center space-x-3 my-1">
				<span class="text-xs text-gray-400">{{ author }}</span>
				<div class="flex items-center">
					<template v-for="star in 5" :key="star">
						<svg
							v-if="star <= rating"
							class="w-3 h-3 text-yellow-500 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polygon
								points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
							/>
						</svg>
						<svg
							v-else
							class="w-3 h-3 text-gray-300 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polygon
								points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
							/>
						</svg>
					</template>
				</div>
			</div>
			<div class="mb-4 mt-2 flex space-x-5">
				<div class="flex space-x-1 items-center">
					<Icon name="material-symbols:nest-clock-farsight-analog-outline" class="h-5 w-5 text-white" />
					<p class="text-xs text-white">{{ duration }} hours</p>
				</div>
				<div class="flex space-x-1 items-center">
					<Icon name="bx:bxs-videos" class="h-5 w-5 text-white" />
					<p class="text-xs text-white">{{ lessons }} lessons</p>
				</div>
			</div>
			<div class="flex space-x-1 items-center">
				<Tags :tags="tags" />
			</div>
		</a>
	</div>
</template>

<style scoped></style>

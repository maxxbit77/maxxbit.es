<script setup>
const { studies } = usePortfolioInfo()
</script>

<template>
	<div>
		<div class=" pb-24">
			<div
				class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 "
			>
				<div
					v-for="(item, index) in studies"
					:key="index"
					class="max-w-[350px] bg-slate-800 px-6 py-2 rounded-xl transform mx-auto hover:scale-105 transition duration-300 shadow-lg"
				>
					<NuxtLink :to="item.url">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-44 rounded-lg border"
								:src="item.image.url"
								:alt="item.image.alt"
								loading="lazy"
							/>
							<p
								class="border-primary-600 absolute top-4 -right-12 w-44 text-center rotate-[40deg] border-4 bg-green-500 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg"
							>
								{{ item.status }}
							</p>
						</div>
						<h1 class="mt-4 text-white font-bold cursor-pointer">
							{{ item.courseName }}
						</h1>
						<div class="flex items-center space-x-3 my-1">
							<span class="text-xs text-gray-400">
								{{ item.author }}
							</span>
							<div class="flex items-center">
								<template v-for="star in 5">
									<svg
										v-if="star <= item.rating"
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
								<Icon
									name="material-symbols:nest-clock-farsight-analog-outline"
									class="h-5 w-5 text-white"
								/>
								<p class="text-xs text-white">
									{{ item.duration }} hours
								</p>
							</div>
							<div class="flex space-x-1 items-center">
								<Icon
									name="bx:bxs-videos"
									class="h-5 w-5 text-white"
								/>
								<p class="text-xs text-white">
									{{ item.lessons }} lessons
								</p>
							</div>
						</div>
						<div class="flex space-x-1 items-center">
							<Tags :tags="item.tags" />
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

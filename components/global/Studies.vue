<script setup>
const data = computed(() => usePortfolioInfo().projects)
</script>

<template>
	<div>
		<section class="">
			<div class="uppercase text-2xl text-white">
				Courses
				<div class="border border-secondary-400 w-full" />
			</div>
			<div>
				<ul v-for="(item, index) in data" :key="index">
					<template class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
						<li>
							<CardProject v-bind="item" />
						</li>
					</template>
				</ul>
			</div>
		</section>
	</div>
</template>

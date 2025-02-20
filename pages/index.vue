<script setup>
useSeoMeta({
	title: "Maxxbit's Porfolio",
	description: 'Portfolio developed with Vue/Nuxt/Tailwind',
	ogTitle: 'Maxxbit.tech',
	ogDescription: 'Portfolio developed with Vue/Nuxt/Tailwind',
	ogImage: '/brand/meta.png',
	ogUrl: 'https://maxxbit.tech',
	twitterTitle: 'Maxxbit.tech',
	twitterDescription: 'Portfolio developed with Vue/Nuxt/Tailwind',
	twitterImage: '/brand/meta.png',
	twitterCard: 'Portfolio developed with Vue/Nuxt/Tailwind',
})

const professionalExperienceData = computed(() => usePortfolioInfo().experience)
const coursesData = computed(() => usePortfolioInfo().courses)
</script>

<template>
	<div class="max-w-3xl mx-auto px-4 min-h-screen">
		<header>
			<Header />
		</header>

		<div>
			<MatrixEffect />
		</div>
		<section>
			<WorkExperiences :data="professionalExperienceData" />
		</section>
		<section>
			<!-- <Projects /> -->
			<WhatIsComing />
		</section>
		<!-- <section>
			<AnimationsChain />
		</section> -->
		<section class="mb-12">
			<Courses :data="coursesData" />
		</section>
	</div>
</template>

<style scoped>
body {
	margin: 0;
	overflow: hidden;
}
</style>

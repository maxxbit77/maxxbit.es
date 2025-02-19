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
</script>

<template>
	<div class="max-w-5xl mx-auto px-4 min-h-screen">
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
			<Projects />
		</section>
		<section>
			<Studies />
		</section>
	</div>
</template>

<style scoped>
body {
	margin: 0;
	overflow: hidden;
}
</style>

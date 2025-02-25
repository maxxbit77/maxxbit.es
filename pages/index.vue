<script setup>
// useSeoMeta({
// 	title: "Maxxbit's Porfolio",
// 	description: 'Portfolio developed with Vue/Nuxt/Tailwind',
// 	ogTitle: 'Maxxbit.tech',
// 	ogDescription: 'Portfolio developed with Vue/Nuxt/Tailwind',
// 	ogImage: '/brand/meta.png',
// 	ogUrl: 'https://maxxbit.tech',
// 	twitterTitle: 'Maxxbit.tech',
// 	twitterDescription: 'Portfolio developed with Vue/Nuxt/Tailwind',
// 	twitterImage: '/brand/meta.png',
// 	twitterCard: 'Portfolio developed with Vue/Nuxt/Tailwind',
// })

const locale = useCookie('locale')

const portfolioInfo = computed(() => (locale.value === 'es' ? usePortfolioES() : usePortfolioEN()))

const experienceData = computed(() => portfolioInfo.value.experience)
const coursesData = computed(() => portfolioInfo.value.courses)
const projecsData = computed(() => portfolioInfo.value.projects)
const navBarData = computed(() => portfolioInfo.value.navBar)
const presentationData = computed(() => portfolioInfo.value.myInfo)
const stackData = computed(() => portfolioInfo.value.stack)
</script>

<template>
	<div class="max-w-3xl mx-auto px-4 min-h-screen">
		<NavBar :data="navBarData" />
		<Header :data="presentationData" />
		<div>
			<MatrixEffect />
		</div>
		<section class="mt-24" id="experience">
			<WorkExperiences :data="experienceData" />
		</section>
		<section class="mt-24" id="projects">
			<WhatIsComing :data="projecsData" />
		</section>
		<section class="mt-24" id="stack">
			<TechStack :data="stackData" />
		</section>
		<section class="mt-24" id="studies">
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

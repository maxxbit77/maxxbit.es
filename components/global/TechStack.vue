<script setup>
import {
	LogosBootstrap,
	LogosJs,
	LogosNuxt,
	LogosTailwind,
	LogosTs,
	LogosVite,
	LogosVue,
	LogosApi,
	LogosConfluence,
	LogosCss,
	LogosDocker,
	LogosGit,
	LogosGithub,
	LogosHtml,
	LogosJira,
	LogosD3,
	LogosFirebase,
	LogosJson,
	LogosLeaflet,
	LogosMarkdown,
	LogosNode,
	LogosNotion,
	LogosPostman,
	LogosNpm,
	LogosRadix,
	LogosShadcn,
	LogosSourcetree,
	LogosSupabase,
	LogosSvg,
	LogosVuetify,
	LogosWordpress,
} from '#components'

const smallIcons = [
	{ name: 'Javascript', component: LogosJs, skill: 95 },
	{ name: 'Nuxt.js 3', component: LogosNuxt, skill: 95 },
	{ name: 'TypeScript', component: LogosTs, skill: 85 },
	{ name: 'Vue.js 3', component: LogosVue, skill: 95 },
]

const mediumIcons = [
	{ name: 'Tailwind', component: LogosTailwind, skill: 95 },
	{ name: 'Vite', component: LogosVite, skill: 70 },
	{ name: 'API', component: LogosApi, skill: 70 },
	{ name: 'CSS', component: LogosCss, skill: 80 },
	{ name: 'Git', component: LogosGit, skill: 70 },
	{ name: 'HTML', component: LogosHtml, skill: 99 },
	{ name: 'Node.js', component: LogosNode, skill: 50 },
	{ name: 'Postman', component: LogosPostman, skill: 60 },
	{ name: 'ShadCN', component: LogosShadcn, skill: 70 },
	{ name: 'Supabase', component: LogosSupabase, skill: 50 },
	{ name: 'Radix UI', component: LogosRadix, skill: 70 },
]

const largeIcons = [
	{ name: 'NPM', component: LogosNpm, skill: 60 },
	{ name: 'Bootstrap', component: LogosBootstrap, skill: 90 },
	{ name: 'GitHub', component: LogosGithub, skill: 70 },
	{ name: 'JSON', component: LogosJson, skill: 70 },
	{ name: 'WordPress', component: LogosWordpress, skill: 80 },
	{ name: 'Confluence', component: LogosConfluence, skill: 50 },
	{ name: 'Docker', component: LogosDocker, skill: 40 },
	{ name: 'Jira', component: LogosJira, skill: 60 },
	{ name: 'D3.js', component: LogosD3, skill: 70 },
	{ name: 'Firebase', component: LogosFirebase, skill: 50 },
	{ name: 'Leaflet', component: LogosLeaflet, skill: 70 },
	{ name: 'Markdown', component: LogosMarkdown, skill: 70 },
	{ name: 'Sourcetree', component: LogosSourcetree, skill: 70 },
	{ name: 'SVG', component: LogosSvg, skill: 70 },
	{ name: 'Vuetify', component: LogosVuetify, skill: 70 },
	{ name: 'Notion', component: LogosNotion, skill: 80 },
]

const categories = {
	'🖥️ Development & Frameworks': [
		'Javascript',
		'TypeScript',
		'Vue.js 3',
		'Nuxt.js 3',
		'Node.js',
		'API',
		'JSON',
		'D3.js',
		'WordPress',
	],
	'🎨 Design & UI/UX': ['Tailwind', 'CSS', 'Radix UI', 'ShadCN', 'Vuetify', 'Bootstrap', 'SVG'],
	'🛠️ Tools & DevOps': ['Git', 'GitHub', 'NPM', 'Vite', 'Docker', 'Sourcetree', 'Markdown'],
	'📦 Backend & Databases': ['Firebase', 'Supabase', 'Postman'],
	'📌 Productivity & Management': ['Notion', 'Jira', 'Confluence', 'Leaflet'],
}

const currentComponentCircle = ref(true)
const showChangeButton = ref(false)
const categorizedIcons = Object.fromEntries(
	Object.entries(categories).map(([category, names]) => [
		category,
		[...smallIcons, ...mediumIcons, ...largeIcons].filter((icon) => names.includes(icon.name)),
	])
)

onMounted(() => (window.innerHeight < 800 ? (showChangeButton.value = false) : (showChangeButton.value = true)))
</script>

<template>
	<div class="relative">
		<div
			class="absolute -bottom-[400px] right-0 z-0 w-[300px] h-[300px] bg-gradient-to-r from-matrix to-transparent blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"
		/>
		<div
			class="absolute top-[500px] right-24 z-0 w-[200px] h-[200px] bg-gradient-to-r from-matrix-dark to-transparent blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"
		/>
		<div
			class="absolute top-0 -left-24 z-0 w-[200px] h-[200px] bg-gradient-to-r from-accent to-transparent blur-3xl opacity-30 transform"
		/>

		<TitleLine>The Tech Shelf 📚</TitleLine>

		<button
			v-if="showChangeButton"
			@click="currentComponentCircle = !currentComponentCircle"
			class="p-2 border border-white text-accent rounded-lg absolute top-10 left-0 shadow-accent group hover:bg-accent transition-all"
		>
			<Icon name="material-symbols:change-circle-outline" class="size-10 group-hover:text-white" />
		</button>

		<Transition name="blur" mode="out-in">
			<div v-if="currentComponentCircle" key="circle">
				<StackCircle :smallIcons="smallIcons" :mediumIcons="mediumIcons" :largeIcons="largeIcons" />
			</div>
			<div v-else key="list">
				<StackList class="mt-24" :data="categorizedIcons" />
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.blur-enter-active,
.blur-leave-active {
	transition:
		opacity 0.2s ease,
		filter 0.2s ease;
}
.blur-enter-from,
.blur-leave-to {
	opacity: 0;
	filter: blur(10px);
}
</style>

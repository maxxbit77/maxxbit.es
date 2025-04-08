<script setup>
import { useWindowSize } from '@vueuse/core'

const props = defineProps({
	data: Object,
})
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
	LogosAsana,
	LogosJest,
	LogosCypress,
	LogosVitest,
} from '#components'

const { width: screenSize } = useWindowSize()

const smallIcons = [
	{ name: 'Javascript', component: LogosJs, skill: 90 },
	{ name: 'Nuxt.js 3', component: LogosNuxt, skill: 90 },
	{ name: 'TypeScript', component: LogosTs, skill: 80 },
	{ name: 'Vue.js 3', component: LogosVue, skill: 90 },
]

const mediumIcons = [
	{ name: 'Tailwind CSS', component: LogosTailwind, skill: 90 },
	{ name: 'Jest.js', component: LogosJest, skill: 75 },
	{ name: 'Vite', component: LogosVite, skill: 60 },
	{ name: 'API Restful', component: LogosApi, skill: 70 },
	{ name: 'CSS 3', component: LogosCss, skill: 90 },
	{ name: 'Git', component: LogosGit, skill: 70 },
	{ name: 'HTML 5', component: LogosHtml, skill: 90 },
	{ name: 'ShadCN', component: LogosShadcn, skill: 70 },
	{ name: 'Radix UI', component: LogosRadix, skill: 70 },
	{ name: 'JSON', component: LogosJson, skill: 70 },
	{ name: 'Vuetify', component: LogosVuetify, skill: 70 },
	{ name: 'NPM', component: LogosNpm, skill: 60 },
]

const largeIcons = [
	{ name: 'Postman', component: LogosPostman, skill: 60 },
	{ name: 'Vitest', component: LogosVitest, skill: 60 },
	{ name: 'Cypress', component: LogosCypress, skill: 50 },
	{ name: 'Supabase', component: LogosSupabase, skill: 50 },
	{ name: 'Node.js', component: LogosNode, skill: 50 },
	{ name: 'Notion', component: LogosNotion, skill: 80 },
	{ name: 'Asana', component: LogosAsana, skill: 70 },
	{ name: 'Jira', component: LogosJira, skill: 60 },
	{ name: 'Bootstrap', component: LogosBootstrap, skill: 90 },
	{ name: 'GitHub', component: LogosGithub, skill: 70 },
	{ name: 'WordPress', component: LogosWordpress, skill: 80 },
	{ name: 'Confluence', component: LogosConfluence, skill: 50 },
	{ name: 'Docker', component: LogosDocker, skill: 40 },
	{ name: 'D3.js', component: LogosD3, skill: 70 },
	{ name: 'Firebase', component: LogosFirebase, skill: 50 },
	{ name: 'Leaflet', component: LogosLeaflet, skill: 70 },
	{ name: 'Markdown', component: LogosMarkdown, skill: 70 },
	{ name: 'Sourcetree', component: LogosSourcetree, skill: 70 },
	{ name: 'SVG', component: LogosSvg, skill: 70 },
]

const categories = {
	'Dev & Frameworks': [
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
	'Design & UI/UX': ['Tailwind CSS', 'CSS 3', 'Radix UI', 'ShadCN', 'Vuetify', 'Bootstrap', 'SVG'],
	Testing: ['Jest.js', 'Vitest', 'Cypress'],
	'Tools & DevOps': ['Git', 'GitHub', 'NPM', 'Vite', 'Docker', 'Sourcetree', 'Markdown', 'Leaflet'],
	'Backend & Databases': ['Firebase', 'Supabase', 'Postman'],
	'Productivity & Management': ['Notion', 'Jira', 'Confluence', 'Asana'],
}

const iconRotation = ref(0)
const showCircleComponent = ref(false)
const showChangeButton = ref(false)
const categorizedIcons = Object.fromEntries(
	Object.entries(categories).map(([category, names]) => [
		category,
		[...smallIcons, ...mediumIcons, ...largeIcons].filter((icon) => names.includes(icon.name)),
	])
)

const handleButtonClick = () => {
	showCircleComponent.value = !showCircleComponent.value
	iconRotation.value += 180
}

watch(screenSize, (newWidth) => {
	showChangeButton.value = newWidth >= 800
	showCircleComponent.value = newWidth >= 800
})

onMounted(() => {
	if (process.client) {
		showChangeButton.value = screenSize.value >= 800
		showCircleComponent.value = screenSize.value >= 800
	}
})
</script>

<template>
	<div class="relative">
		<div class="mb-12">
			<TitleLine>{{ data.title }}</TitleLine>
		</div>

		<button
			v-if="showChangeButton"
			@click="handleButtonClick"
			class="p-2 border border-white text-accent rounded-lg absolute top-10 left-0 shadow-accent group transition-all hover:bg-gray-500 z-50"
			:class="{ 'bg-accent text-white': !showCircleComponent }"
		>
			{{ data.buttons.changeView }}
		</button>
		<div class="absolute top-8 right-0 text-white text-sm">
			<div class="flex justify-start items-center space-x-2">
				<div class="size-4 rounded-full bg-matrix"></div>
				<p>Advanced</p>
			</div>
			<div class="flex justify-start items-center space-x-2">
				<div class="size-4 rounded-full bg-accent"></div>
				<p>Intermediate</p>
			</div>
			<div class="flex justify-start items-center space-x-2">
				<div class="size-4 rounded-full bg-blue-300"></div>
				<p>Basic</p>
			</div>
		</div>

		<Transition name="blur" mode="out-in">
			<div v-if="showCircleComponent" key="circle">
				<StackCircle
					:smallIcons="smallIcons"
					:mediumIcons="mediumIcons"
					:largeIcons="largeIcons"
					:skillTxt="data.skill"
				/>
			</div>
			<div v-else key="list">
				<StackList
					class="mt-12"
					:icons="categorizedIcons"
					:skillTxt="data.skill"
					:translations="data.buttons"
				/>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.icon-rotate {
	transition: transform 0.3s ease-in-out;
}

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

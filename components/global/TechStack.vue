<script setup>
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
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
	{ name: 'Tailwind CSS', component: LogosTailwind, skill: 95 },
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

const totalMediumIcons = mediumIcons.length
const totalLargeIcons = largeIcons.length
const iconName = ref('')
const iconSkill = ref('')
const rotation = ref(0)

const handleScroll = () => {
	rotation.value = window.scrollY * 0.1
}

function setIconName(name) {
	iconName.value = name
}

function setIconSkill(skill) {
	iconSkill.value = skill
}

function handleOver(icon) {
	console.log(icon.name)
	setIconName(icon.name)
	setIconSkill(icon.skill)
}

function handleOut() {
	setIconName('')
	setIconSkill('')
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
	<div @mouseleave="handleOut" class="mb-24">
		<TitleLine>The Tech Shelf 📚</TitleLine>
		<div class="w-64 h-10 mx-auto">
			<div v-if="iconName" class="flex flex-col space-y-1">
				<div class="text-center h-5 text-matrix font-matrix text-lg transition-all ease-in-out">
					<p>{{ iconName }}</p>
				</div>
				<div class="flex justify-center">
					<ProgressRoot :value="iconSkill" class="w-full h-1 bg-gray-700 rounded">
						<ProgressIndicator
							class="h-1 bg-matrix rounded transition-all duration-300"
							:style="{ width: `${iconSkill}%` }"
						/>
					</ProgressRoot>
				</div>
				<div class="flex justify-between items-center font-matrix text-gray-400 text-xs">
					<span>0%</span>
					<p>Skill level</p>
					<span>{{ iconSkill }}%</span>
				</div>
			</div>
		</div>

		<div class="relative size-[600px] mx-auto mt-12">
			<!-- Small icons grid (2x2) -->
			<div class="absolute size-[160px] top-[220px] left-[220px] flex items-center justify-center z-30">
				<div class="flex items-center justify-center">
					<div class="grid grid-cols-2 grid-rows-2 gap-2">
						<component
							v-for="(icon, index) in smallIcons"
							@mouseenter="handleOver(icon)"
							:key="index"
							:is="icon.component"
							class="size-14 border-4 border-white rounded-md"
						/>
					</div>
				</div>
			</div>

			<!-- Medium circle -->
			<div class="absolute inset-0 top-32 size-[350px] left-32 flex items-center justify-center">
				<div class="">
					<div class="absolute inset-0 z-20" :style="{ transform: `rotate(-${rotation}deg)` }">
						<div
							v-for="(icon, index) in mediumIcons"
							@mouseenter="handleOver(icon)"
							:key="index"
							class="absolute size-16 bg-gray-200 rounded-full shadow-md flex items-center justify-center"
							:style="{
								top: '40%',
								left: '40%',
								transform: `rotate(${(360 / totalMediumIcons) * index}deg) translate(150px) rotate(${rotation}deg) rotate(-${(360 / totalMediumIcons) * index}deg)`,
							}"
						>
							<component :is="icon.component" class="size-12" />
						</div>
					</div>
				</div>
			</div>

			<!-- Large circle -->
			<div class="absolute inset-0 top-0 left-0 flex items-center justify-center">
				<div class="absolute inset-0 size-[600px]" :style="{ transform: `rotate(${rotation}deg)` }">
					<div
						v-for="(icon, index) in largeIcons"
						:key="index"
						@mouseenter="handleOver(icon)"
						class="absolute size-16 bg-white rounded-full shadow-md flex items-center justify-center"
						:style="{
							top: '45%',
							left: '45%',
							transform: `rotate(${(360 / totalLargeIcons) * index}deg) translate(280px) rotate(-${rotation}deg) rotate(-${(360 / totalLargeIcons) * index}deg)`,
						}"
					>
						<component :is="icon.component" class="size-12" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

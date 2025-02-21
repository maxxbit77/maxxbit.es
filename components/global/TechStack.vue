<script setup>
import {
	LogosBootstrap,
	LogosJquery,
	LogosJs,
	LogosNuxt,
	LogosTailwind,
	LogosTs,
	LogosVite,
	LogosVue,
	LogosApi,
	LogosCanva,
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

const smallIcons = ref([
	markRaw(LogosJs),
	markRaw(LogosNuxt),
	markRaw(LogosTailwind),
	markRaw(LogosTs),
	markRaw(LogosVue),
])
const mediumIcons = ref([
	markRaw(LogosVite),
	markRaw(LogosApi),
	markRaw(LogosCss),
	markRaw(LogosGit),
	markRaw(LogosHtml),
	markRaw(LogosNode),
	markRaw(LogosPostman),
	markRaw(LogosShadcn),
	markRaw(LogosSupabase),
	markRaw(LogosRadix),
])
const largeIcons = ref([
	markRaw(LogosNpm),
	markRaw(LogosBootstrap),
	markRaw(LogosGithub),
	markRaw(LogosJson),
	markRaw(LogosWordpress),
	markRaw(LogosConfluence),
	markRaw(LogosDocker),
	markRaw(LogosJira),
	markRaw(LogosD3),
	markRaw(LogosFirebase),
	markRaw(LogosLeaflet),
	markRaw(LogosMarkdown),
	markRaw(LogosSourcetree),
	markRaw(LogosSvg),
	markRaw(LogosVuetify),
	markRaw(LogosNotion),
])

const totalSmallIcons = smallIcons.value.length
const totalMediumIcons = mediumIcons.value.length
const totalLargeIcons = largeIcons.value.length

const rotation = ref(0)
const iconName = ref('')

const handleIconName = (icon) => {
	console.log(icon)
}

const handleScroll = () => {
	rotation.value = window.scrollY * 0.1
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
	<div>
		<h2 class="mb-4 uppercase text-3xl text-center text-white font-matrix">The Tech Shelf 📚</h2>
		<div class="relative h-[700px]">
			<!-- Small circle -->
			<div class="w-full flex justify-center absolute top-0 right-2 z-30">
				<div class="relative w-[400px] my-24 h-[400px] flex items-center justify-center">
					<div class="absolute w-full h-full bg-transparent" :style="{ transform: `rotate(${rotation}deg)` }">
						<div
							v-for="(icon, index) in smallIcons"
							:key="index"
							class="absolute size-16 top-44 left-44 bg-gray-200 bg-opacity-40 rounded-full shadow-md flex items-center justify-center cursor-pointer"
							:style="{
								transform: `rotate(${(360 / totalSmallIcons) * index}deg) translate(70px) rotate(-${rotation}deg) rotate(-${(360 / totalSmallIcons) * index}deg)`,
							}"
						>
							<component :is="icon" class="size-12" />
						</div>
					</div>
				</div>
			</div>

			<!-- Medium circle -->
			<div class="w-full flex justify-center absolute -top-3">
				<div class="relative w-[400px] my-24 h-[400px] flex items-center justify-center">
					<div
						class="absolute w-full h-full bg-transparent"
						:style="{ transform: `rotate(-${rotation}deg)` }"
					>
						<div
							v-for="(icon, index) in mediumIcons"
							:key="index"
							class="absolute size-16 top-44 left-44 bg-gray-200 bg-opacity-40 rounded-full shadow-md flex items-center justify-center"
							:style="{
								transform: `rotate(${(360 / totalMediumIcons) * index}deg) translate(150px) rotate(${rotation}deg) rotate(-${(360 / totalMediumIcons) * index}deg)`,
							}"
						>
							<component :is="icon" class="size-12" />
						</div>
					</div>
				</div>
			</div>

			<!-- Large circle -->
			<div class="w-full flex justify-center absolute top-0 right-2">
				<div class="relative w-[400px] my-24 h-[400px] flex items-center justify-center">
					<div class="absolute w-full h-full bg-transparent" :style="{ transform: `rotate(${rotation}deg)` }">
						<div
							v-for="(icon, index) in largeIcons"
							:key="index"
							class="absolute size-16 top-44 left-44 bg-white bg-opacity-40 rounded-full shadow-md flex items-center justify-center"
							:style="{
								transform: `rotate(${(360 / totalLargeIcons) * index}deg) translate(230px) rotate(-${rotation}deg) rotate(-${(360 / totalLargeIcons) * index}deg)`,
							}"
						>
							<component :is="icon" class="size-12" />
						</div>
					</div>
				</div>
			</div>

			<div></div>
		</div>
	</div>
</template>

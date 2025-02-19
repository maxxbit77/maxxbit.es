<script setup>
import { TransitionRoot } from '@headlessui/vue'

const props = defineProps({
	id: String,
})

const data = computed(() => usePortfolioInfo()?.[props.id] || null)

const activeIndex = ref(null)
const openImage = ref(null)

const handleMouseOver = (index, project) => {
	activeIndex.value = index
}
const handleMouseLeave = () => {
	activeIndex.value = null
}

const openFullImage = (imageUrl) => {
	openImage.value = imageUrl
}

const closeFullImage = () => {
	openImage.value = null
}

const handleKeyDown = (event) => {
	if (event.key === 'Escape') closeFullImage()
}

onMounted(() => {
	window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
	window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
	<div>
		<ul>
			<li
				v-for="(project, index) in data"
				:key="index"
				class="mb-12 py-2 bg-slate-400/10 md:bg-transparent sm:hover:bg-slate-400/10 rounded-lg lg:max-h-[380px] grid grid-cols-1 md:grid-cols-2 gap-x-2 overflow-hidden"
				@mouseover="handleMouseOver(index, project)"
				@mouseleave="handleMouseLeave"
			>
				<div>
					<div class="relative hidden md:block md:w-[480px] md:h-[380px] p-1">
						<img
							v-if="project?.image?.url"
							@click="openFullImage(project?.image.url)"
							loading="lazy"
							:src="project?.image.url"
							class="min-w-full rounded-lg cursor-pointer hover:scale-105 transition-transform"
							:alt="project?.image.alt"
						/>
						<CardGlitch v-else />
					</div>
				</div>
				<a :href="project.url">
					<div class="grid grid-cols-4 gap-8 text-left">
						<div class="px-4 col-span-1 text-secondary-300">
							<p class="md:hidden lg:block">{{ project.startAt }} - {{ project.endsAt }}</p>
						</div>
						<div class="col-span-3">
							<div class="overflow-wrap break-word">
								<h3 class="text-white text-xl" :class="{ '!text-matrix-500': activeIndex === index }">
									{{ project.projectName }}
									<Icon
										name="material-symbols-light:arrow-outward"
										class="h-5 w-5"
										:class="{
											'text-matrix-500 translate-x-1 -translate-y-1 transition-all':
												activeIndex === index,
										}"
									/>
								</h3>
								<div class="text-white">
									<h4 class="text-secondary-400">{{ project.companyName }}</h4>
									<h4 class="text-secondary-400">{{ project.position }}</h4>
									<p class="mt-5">{{ project.description }}</p>
								</div>
							</div>
							<Tags :tags="project?.tags" />
						</div>
					</div>
				</a>
			</li>
		</ul>

		<!-- Modal de imagen ampliada -->
		<TransitionRoot appear :show="!!openImage" as="template">
			<div
				class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
				@click="closeFullImage"
			>
				<img :src="openImage" class="max-w-full max-h-full rounded-lg shadow-lg" @click.stop />
			</div>
		</TransitionRoot>
	</div>
</template>

<style scoped>
.text-transition {
	-webkit-animation: 0.5s ease 0s normal forwards 1 fadein;
	animation: 0.5s ease 0s normal forwards 1 fadein;
}

@keyframes fadein {
	0% {
		opacity: 0;
	}
	66% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-webkit-keyframes fadein {
	0% {
		opacity: 0;
	}
	66% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>

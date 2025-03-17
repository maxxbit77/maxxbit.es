import type { mergeProps } from 'vue';
<script setup>
const props = defineProps({
	smallIcons: Array,
	mediumIcons: Array,
	largeIcons: Array,
	skillTxt: String,
})

const totalMediumIcons = props.mediumIcons.length
const totalLargeIcons = props.largeIcons.length
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
	<div class="relative">
		<!-- Circles Background -->
		<div class="absolute -top-12 right-0 text-white text-sm">
			<div class="flex justify-start items-center space-x-2">
				<div class="size-4 rounded-full bg-green-400"></div>
				<p>High</p>
			</div>
			<div class="flex justify-start items-center space-x-2">
				<div class="size-4 rounded-full bg-orange-400"></div>
				<p>Advanced</p>
			</div>
			<div class="flex justify-start items-center space-x-2">
				<div class="size-4 rounded-full bg-blue-400"></div>
				<p>Intermediate</p>
			</div>
		</div>
		<div>
			<div class="absolute top-[-26%] left-1/2 -translate-x-[65%] z-0">
				<BgBlue />
			</div>
			<div class="absolute top-[4%] left-1/2 -translate-x-[65%] z-0">
				<BgYellow />
			</div>
			<div class="absolute top-[32%] left-1/2 -translate-x-[65%] z-0">
				<BgGreen />
			</div>
		</div>

		<div @mouseleave="handleOut">
			<!-- Progress Indicator -->
			<div class="w-64 h-10 mx-auto">
				<div class="flex flex-col space-y-1">
					<div
						v-if="iconName"
						class="text-center h-5 text-matrix font-matrix text-lg transition-all ease-in-out"
					>
						<p class="">{{ iconName }}</p>
					</div>
				</div>
			</div>

			<div class="mt-8 relative size-[600px] mx-auto">
				<!-- Small icons grid (2x2) -->
				<div class="absolute size-[160px] top-[220px] left-[220px] flex items-center justify-center z-50">
					<div class="flex items-center justify-center">
						<div class="grid grid-cols-2 grid-rows-2 gap-2">
							<component
								v-for="(icon, index) in smallIcons"
								@mouseenter="handleOver(icon)"
								:key="index"
								:is="icon.component"
								class="size-14 p-1 border-2 rounded-md custom-blur z-10"
							/>
						</div>
					</div>
				</div>

				<!-- Medium circle -->
				<div class="absolute inset-0 top-32 size-[350px] left-32 flex items-center justify-center">
					<div class="">
						<div class="absolute inset-0 z-40" :style="{ transform: `rotate(-${rotation}deg)` }">
							<div
								v-for="(icon, index) in mediumIcons"
								@mouseenter="handleOver(icon)"
								:key="index"
								class="absolute size-16 rounded-full shadow-md flex items-center justify-center custom-blur z-10"
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
							class="absolute size-16 rounded-full shadow-md flex items-center justify-center z-10 custom-blur"
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
	</div>
</template>

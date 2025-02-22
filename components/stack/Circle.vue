import type { mergeProps } from 'vue';
<script setup>
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
const props = defineProps({
	smallIcons: Array,
	mediumIcons: Array,
	largeIcons: Array,
})

const totalMediumIcons = props.mediumIcons.length
const totalLargeIcons = props.largeIcons.length
const iconName = ref('↓ Pick a tech ↓')
const iconSkill = ref('')
const rotation = ref(0)
const currentComponentCircle = ref(true)

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
	setIconName('↓ Pick a tech ↓')
	setIconSkill('')
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
<template>
	<div @mouseleave="handleOut">
		<div class="w-64 mt-2 h-10 mx-auto">
			<div class="flex flex-col space-y-1">
				<div class="text-center h-5 text-matrix font-matrix text-lg transition-all ease-in-out">
					<p>{{ iconName }}</p>
				</div>
				<div v-if="iconName && iconSkill" class="flex justify-center">
					<ProgressRoot :value="iconSkill" class="w-full h-1 bg-gray-700 rounded">
						<ProgressIndicator
							class="h-1 bg-matrix rounded transition-all duration-300"
							:style="{ width: `${iconSkill}%` }"
						/>
					</ProgressRoot>
				</div>
				<div
					v-if="iconName && iconSkill"
					class="flex justify-between items-center font-matrix text-gray-400 text-xs"
				>
					<span>0%</span>
					<p>Skill level</p>
					<span>{{ iconSkill }}%</span>
				</div>
			</div>
		</div>

		<div class="mt-8 relative size-[600px] mx-auto">
			<!-- Small icons grid (2x2) -->
			<div class="absolute size-[160px] top-[220px] left-[220px] flex items-center justify-center z-30">
				<div class="flex items-center justify-center">
					<div class="grid grid-cols-2 grid-rows-2 gap-2">
						<component
							v-for="(icon, index) in smallIcons"
							@mouseenter="handleOver(icon)"
							:key="index"
							:is="icon.component"
							class="size-14 p-1 border-2 border-matrix rounded-md"
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
							class="absolute size-16 bg-slate-700 rounded-full shadow-md flex items-center justify-center"
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
						class="absolute size-16 bg-slate-700 rounded-full shadow-md flex items-center justify-center"
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

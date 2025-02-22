<script setup>
const props = defineProps({
	data: Object,
})
</script>
<template>
	<div class="flex flex-col space-y-8">
		<div v-for="(icons, category) in data" :key="category">
			<h3 class="text-xl font-bold text-white mb-2">{{ category }}</h3>
			<div class="w-full">
				<ul class="flex flex-wrap gap-2">
					<li
						v-for="(icon, index) in icons"
						:key="index"
						class="w-28 p-2 bg-slate-800 rounded-lg grid grid-row h-32"
					>
						<p class="text-matrix text-center font-matrix">{{ icon.name }}</p>

						<component :is="icon.component" class="size-12 mx-auto" />

						<div class="flex justify-between">
							<span class="text-xs text-gray-400">Skill</span>
							<span class="text-xs text-gray-400">{{ icon.skill }}%</span>
						</div>

						<ProgressRoot :value="icon.skill" class="h-1 w-full bg-gray-700 rounded">
							<ProgressIndicator
								class="h-1 bg-matrix rounded transition-all duration-300"
								:style="{ width: `${icon.skill}%` }"
							/>
						</ProgressRoot>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

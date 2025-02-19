<script setup>
const props = defineProps({
	projectName: String,
	image: {
		type: String,
		required: false,
	},
	companyName: String,
	startAt: String,
	endsAt: String,
	position: String,
	description: String,
	url: String,
	tags: Array,
})
</script>

<template>
	<div
		class="block h-full rounded-2xl border border-gray-800 outline-none transition-all group active:scale-[0.98] hover:shadow-lg hover:shadow-matrix-500/20 p-2"
	>
		<a :href="url" target="_blank">
			<div class="hidden md:block p-1">
				<img
					v-if="image?.url"
					loading="lazy"
					:src="image.url"
					class="min-w-full rounded-lg cursor-pointer hover:scale-105 transition-transform"
					:alt="image.alt"
				/>
				<CardGlitch v-else />
			</div>
			<div class="px-2">
				<span
					class="block text-lg text-matrix font-semibold text-matrix-300 group-hover:text-matrix-400 transition-all"
				>
					{{ projectName }}
				</span>

				<p class="text-gray-300 text-sm mb-3">
					{{ description }}
				</p>

				<div class="flex flex-wrap gap-x-2">
					<span
						v-for="tag in tags"
						:key="tag"
						class="text-xs py-1 rounded-lg transition-all text-accent hover:text-matrix"
					>
						<a :href="`https://www.google.com/search?q=${tag}`" target="_blanck"> #{{ tag }} </a>
					</span>
				</div>
			</div>
		</a>
	</div>
</template>

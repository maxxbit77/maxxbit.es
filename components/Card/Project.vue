<script setup>
const props = defineProps({
	projectName: String,
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
	<ClientOnly>
		<div class="block h-full rounded-2xl border border-gray-800 outline-none transition-all p-2">
			<a :href="url" target="_blank">
				<div class="p-1 perspective-dramatic">
					<CardGlitch />
				</div>
				<div class="px-2">
					<span class="block text-lg text-matrix font-semibold font-matrix transition-all">
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
							<a v-if="tag" :href="`https://www.google.com/search?q=${tag}`" target="_blanck">
								#{{ tag }}
							</a>
						</span>
					</div>
				</div>
			</a>
		</div>
	</ClientOnly>
</template>

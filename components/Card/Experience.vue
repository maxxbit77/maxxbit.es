<script setup>
import { useI18n } from '#i18n'
const props = defineProps({
	projectName: String,
	image: {
		url: String,
		alt: String,
	},
	companyName: String,
	startAt: String,
	endsAt: String,
	position: String,
	description: String,
	responsibilities: Array,
	url: String,
	tags: Array,
	video: String,
})

const { locale } = useI18n()
const lang = locale.value
</script>

<template>
	<ClientOnly>
		<div
			class="coin-tile relative h-full flex flex-col rounded-lg bg-slate-950 overflow-hidden group p-2 shadow-sm shadow-accent"
		>
			<span class="text-gray-500 flex justify-end text-sm font-matrix"> {{ startAt }} - {{ endsAt }} </span>
			<div class="relative z-10 h-44">
				<a :href="url" target="_blank">
					<div>
						<Video :image="image" :src="video" class="rounded-lg" />
					</div>
				</a>
			</div>

			<div class="flex flex-col space-y-3 flex-1 mt-2">
				<div>
					<div class="flex justify-between items-end">
						<span class="block text-xl font-matrix text-accent font-semibold">
							{{ projectName }}
						</span>
						<h3 class="text-gray-500 text-sm font-matrix">
							{{ companyName }}
						</h3>
					</div>
				</div>

				<p class="text-gray-300 text-sm">
					{{ description }}
				</p>

				<div class="flex-1">
					<div class="text-white text-xs">
						<CollapsableText
							:title="lang === 'es' ? 'Responsabilidades' : 'Responsabilities'"
							:items="responsibilities"
						/>
					</div>

					<div>
						<CollapsableTags :title="lang === 'es' ? 'Tecnologías' : 'Technologies'" :items="tags" />
					</div>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>

<style scoped>
@keyframes border-rotation {
	0% {
		border-color: #55ffb6;
	}
	25% {
		border-color: #ff8500;
	}
	50% {
		border-color: #55ffb6;
	}
	75% {
		border-color: #ff8500;
	}
	100% {
		border-color: #55ffb6;
	}
}

.coin-tile {
	position: relative;
	transition: all 0.3s ease-in-out;
	border: 3px solid transparent;
	border-radius: 12px;
	overflow: hidden;
}

.coin-tile::before {
	content: '';
	position: absolute;
	top: 1px;
	left: 1px;
	right: 1px;
	bottom: 1px;

	box-shadow: inset 0 0 0px rgba(15, 241, 7, 0);
}

.coin-tile:hover::before {
	animation: pulse-box-shadow 1s ease-out forwards;
}

@keyframes pulse-box-shadow {
	0% {
		box-shadow: inset 0 0 0px rgba(15, 241, 7, 0);
	}
	50% {
		box-shadow: inset 0 0 15px rgba(15, 241, 7, 0.8);
	}
	100% {
		box-shadow: inset 0 0 0px rgba(15, 241, 7, 0);
	}
}

.coin-tile:hover {
	animation: border-rotation 2s infinite linear;
	border-color: #1af294;
}

.coin-tile:hover .group-hover\:text-white {
	color: white !important;
}
.coin-tile:hover .group-hover\:border-white {
	border-color: white !important;
}
</style>

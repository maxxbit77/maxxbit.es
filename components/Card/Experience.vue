<script setup>
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
})
</script>

<template>
	<ClientOnly>
		<div class="coin-tile relative h-full rounded-lg bg-gray-900 overflow-hidden group p-4">
			<span class="text-gray-500 flex justify-end text-sm font-matrix"> {{ startAt }} - {{ endsAt }} </span>
			<div>
				<div class="relative z-10">
					<a :href="url" target="_blank">
						<img
							v-if="image"
							loading="lazy"
							:src="image.url"
							class="rounded-lg transition-all duration-300"
							:alt="image.alt"
						/>
					</a>
				</div>
				<div class="flex flex-col space-y-4 mt-2">
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
					<div class="text-white text-xs">
						<CollapsableText title="Responsabilities" :items="responsibilities" />
					</div>
					<div>
						<CollapsableTags title="Technologies" :items="tags" />
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

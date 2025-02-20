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
	responsibilities: Array,
	url: String,
	tags: Array,
})
</script>

<template>
	<ClientOnly>
		<div class="coin-tile relative block h-full rounded-lg bg-gray-900 overflow-hidden group p-4">
			<a :href="url" target="_blank">
				<div class="">
					<div class="relative z-10">
						<img
							v-if="image"
							loading="lazy"
							:src="image.url"
							class="rounded-lg cursor-pointer"
							:alt="image.alt"
						/>
						<CardGlitch v-else />
					</div>
					<div class="flex flex-col space-y-4">
						<div>
							<div class="flex justify-between items-end">
								<span class="block text-xl font-matrix text-accent font-semibold">
									{{ projectName }}
								</span>
								<span class="text-gray-500 text-sm font-matrix"> {{ startAt }} - {{ endsAt }} </span>
							</div>
							<h3 class="text-gray-500 text-sm font-matrix">
								{{ companyName }}
							</h3>
						</div>

						<div class="text-white text-xs">
							<div
								v-for="(responsability, index) in responsibilities"
								:key="index"
								class="flex items-end space-x-0.4 space-y-1 group-hover:space-x-1"
							>
								<Icon
									name="material-symbols:play-arrow-outline"
									class="text-white size-4 group-hover:text-matrix group-hover:scale-150 transition-all"
								/>
								<p class="">
									{{ responsability }}
								</p>
							</div>
						</div>
						<div>
							<div class="flex flex-wrap gap-2">
								<span v-for="tag in tags" :key="tag" class="text-xs py-1 rounded-lg text-white">
									<span
										class="border border-matrix rounded-xl px-2 py-1 group-hover:border-white"
										v-if="tag"
										:href="`https://www.google.com/search?q=${tag}`"
										target="_blank"
									>
										{{ tag }}
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</a>
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
	border-radius: 12px; /* Redondear los bordes */
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
	border-color: #1af294; /* Color de borde durante la animación */
}

.coin-tile:hover .group-hover\:text-white {
	color: white !important;
}
.coin-tile:hover .group-hover\:border-white {
	border-color: white !important;
}
</style>

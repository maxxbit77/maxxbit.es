<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const data = computed(() => usePortfolioInfo().projects)

const finances = computed(() => data.value[0])
const vibency = computed(() => data.value[1])
</script>

<template>
	<div class="relative h-[800px] sm:h-[600px]">
		<section>
			<TitleLine>What's Cooking? ⏲</TitleLine>
			<div class="hidden md:block">
				<div class="rainbow absolute top-[160px] z-10 translate-x-50 md:translate-x-52" />
				<div class="bg-slate-950 h-12 w-48 absolute top-[225px] right-16" />
			</div>

			<div class="mt-4 grid row-cols-2 text-white gap-2 absolute top-0 left-0 z-50">
				<div class="grid grid-col-1 sm:grid-cols-2 h-[300px] mt-12 sm:mt-0 items-center">
					<div class="col-span-1">
						<div class="w-full bg-black shadow-lg shadow-matrix p-6 rounded-lg">
							<a :href="vibency.url" target="_blank">
								<div class="flex flex-col justify-start h-full relative cursor-pointer group">
									<div class="flex justify-between items-center">
										<div
											class="text-2xl font-matrix text-matrix drop-shadow-[0_0_10px_rgba(27,249,171,0.8)]"
										>
											{{ vibency.projectName }}
										</div>
										<Icon
											name="mdi:github"
											class="text-gray-400 size-6 group-hover:text-white group-hover:scale-150 transition-all"
										/>
									</div>
									<div class="text-sm mt-3">{{ vibency.description }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-span-1 flex justify-center sm:justify-end">
						<DotLottieVue
							style="height: 300px; width: 300px"
							autoplay
							loop
							src="https://lottie.host/cdc56d5c-646a-4c2e-91f9-0ec609affee0/fYQqN9WXbK.lottie"
						/>
					</div>
				</div>
				<div class="grid grid-col-1 sm:grid-cols-2 h-[300px] mt-40 sm:mt-0 sm:items-center items-start">
					<div class="col-span-1 sm:flex justify-center items-start hidden">
						<DotLottieVue
							style="height: 250px; width: 250px"
							autoplay
							loop
							src="https://lottie.host/7b4dd40d-ea9e-4f68-b44b-77ede00eb7bf/lSmIGuPEAf.lottie"
						/>
					</div>
					<div
						class="w-full bg-black shadow-lg shadow-accent p-4 rounded-lg flex justify-center items-center"
					>
						<a :href="finances.url" target="_blank">
							<div class="flex flex-col justify-start h-full relative cursor-pointer group">
								<div class="flex justify-between items-center">
									<div
										class="text-2xl font-matrix text-accent drop-shadow-[0_0_10px_rgba(255,133,0,0.8)]"
									>
										{{ finances.projectName }}
									</div>
									<Icon
										name="mdi:github"
										class="text-gray-400 size-6 group-hover:text-white group-hover:scale-150 transition-all"
									/>
								</div>
								<div class="text-sm mt-3">{{ finances.description }}</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
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
		border-color: #020617;
	}
}

@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}

.rainbow {
	position: relative;
	z-index: 0;
	width: 400px;
	height: 280px;
	border-radius: 10px;
	overflow: hidden;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: sans-serif;
	font-weight: bold;

	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: transparent;
		background-repeat: no-repeat;
		background-size:
			50% 50%,
			50% 50%;
		background-position:
			0 0,
			100% 0,
			100% 100%,
			0 100%;
		background-image: linear-gradient(#ff8500, #55ffb6), linear-gradient(#020617, #020617),
			linear-gradient(#020617, #020617), linear-gradient(#020617, #020617);
		animation: rotate 2s linear infinite;
	}

	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 2px;
		top: 2px;
		width: calc(100% - 5px);
		height: calc(100% - 5px);
		background: #020617;
		border-radius: 2px;
	}
}
</style>

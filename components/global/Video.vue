<script setup>
import { ref } from 'vue'

defineProps({
	src: String,
	type: { type: String, default: 'video/mp4' },
})

const isLoading = ref(true)
const videoRef = ref(null)

const handleLoadedData = () => {
	isLoading.value = false
}

const handleWaiting = () => {
	isLoading.value = true
}
</script>

<template>
	<div class="video-container">
		<div v-if="isLoading" class="loader">Cargando...</div>

		<video
			ref="videoRef"
			autoplay
			muted
			loop
			playsinline
			class="video"
			@loadeddata="handleLoadedData"
			@waiting="handleWaiting"
		>
			<source :src="src" :type="type" />
			Tu navegador no soporta el video.
		</video>
	</div>
</template>

<style scoped>
.video-container {
	position: relative;
	width: 100%;
	padding-top: 100%;
	overflow: hidden;
}

.video {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 180px;
	object-fit: fill;
}

.loader {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgba(0, 0, 0, 0.7);
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
}
</style>

<script setup>
import { ref } from 'vue'

defineProps({
	src: String,
	image: Object,
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
		<div v-if="isLoading" class="loader h-24 w-24">
			<Loader />
		</div>

		<video ref="videoRef" autoplay muted loop playsinline class="video" @loadeddata="false" @waiting="false">
			<source :src="src" :type="type" />
			Your browser not support this video.
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
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>

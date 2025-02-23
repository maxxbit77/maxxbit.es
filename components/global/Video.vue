<script setup>
defineProps({
	src: String,
	type: { type: String, default: 'video/mp4' },
})
</script>

<template>
	<div class="video-container">
		<video autoplay muted loop playsinline class="video">
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
	height: 250px;
	object-fit: cover;
}
</style>

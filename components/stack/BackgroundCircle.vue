<template>
	<div class="relative w-64 h-64 flex items-center justify-center">
		<!-- Círculo exterior -->
		<div class="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>

		<!-- Círculo medio -->
		<div class="absolute w-48 h-48 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>

		<!-- Círculo interno -->
		<div
			class="absolute w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-green-300 flex items-center justify-center"
		>
			<span class="text-white font-bold">Experto</span>
		</div>
	</div>
</template>

<script setup>
// No necesita lógica por ahora, solo estilos
</script>

<style scoped>
/* Si necesitas más personalización, puedes agregar CSS aquí */
</style>

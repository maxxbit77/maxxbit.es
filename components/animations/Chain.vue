<script setup>
const chains = [
	{ name: 'Ethereum', image: '/images/eth-icon.svg' },
	{ name: 'Bitcoin', image: '/images/btc-icon.svg' },
	{ name: 'Solana', image: '/images/solana-icon.svg' },
	{ name: 'Polygon', image: '/images/polygon-icon.svg' },
	{ name: 'Avalanche', image: '/images/avax-icon.svg' },
]
</script>
<template>
	<section class="py-16">
		<h2 class="text-center text-2xl font-semibold mb-8">All the chains that matter in one place</h2>
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
			<div
				v-for="(chain, index) in chains"
				:key="index"
				class="group relative p-4 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"
			>
				<img
					:src="chain.image"
					:alt="chain.name"
					class="w-20 h-20 mx-auto mb-4 group-hover:opacity-80 transition-opacity duration-300"
				/>
				<p class="text-center text-white">{{ chain.name }}</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
/* Opcional, si deseas más personalización */
.group:hover img {
	filter: brightness(0.8);
}
</style>

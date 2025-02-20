<script setup>
import { TresCanvas } from '@tresjs/core'
import Cube from '~/components/animations/Cube.vue'
</script>
<template>
	<div class="relative h-[660px] xs:h-[500px] sm:h-[600px]">
		<div class="relative w-2/3 h-full ml-auto border-dashed opacity-70">
			<MatrixEffect />
		</div>
		<header class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 absolute top-14">
			<div class="h-[470px] text-left">
				<Presentation />
				<Socials />
			</div>
			<!-- <div>
				<TresCanvas shadows alpha>
					<TresPerspectiveCamera :args="[90, 1, 0.1, 1000]" />
					<Cube />
					<TresGridHelper :args="[10, 10]" />
				</TresCanvas>
			</div> -->
		</header>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object,
})

import { TresCanvas } from '@tresjs/core'
import Cube from '~/components/animations/Cube.vue'
</script>
<template>
	<div class="relative h-[660px] xs:h-[500px] sm:h-[600px]">
		<!-- <div class="relative w-2/3 h-full ml-auto border-dashed opacity-70">
			<MatrixEffect />
		</div> -->
		<header class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 absolute top-14">
			<div class="h-[470px] text-left">
				<Presentation :myInfo="data" />
				<Socials :myInfo="data" />
			</div>
			<div class="fade-mask">
				<img src="/public/profile-1.png" alt="profile-picture" />
			</div>
		</header>
	</div>
</template>

<script setup>
const props = defineProps({
	myInfo: Object,
})

const { name, occupation, slogan, nickName, presentation } = props.myInfo
</script>

<template>
	<div class="my-12 md:my-0 flex flex-col space-y-2">
		<div class="flex space-x-2 items-center">
			<h2 class="text-4xl font-matrix text-matrix uppercase">{{ name }}</h2>
			<p class="text-gray-500 font-matrix pt-2">/ {{ nickName }}</p>
		</div>
		<div>
			<h1 class="text-secondary-100 text-4xl uppercase font-matrix">
				{{ occupation }}
			</h1>
			<h2 class="text-secondary-100 text-2xl uppercase font-matrix">
				{{ slogan }}
			</h2>
		</div>

		<p class="text-gray-400">
			{{ presentation.firstParagraph }}
		</p>
		<p class="text-gray-400">
			<span class="text-white font-bold">{{ presentation.secondParagraphhighlighted }}</span>
			{{ presentation.thirdParagraph }}
			<span class="text-white font-bold">{{ presentation.thirdParagraphhighlighted }}</span>
		</p>
	</div>
</template>

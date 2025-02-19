<script setup>
const jsCode = [
	'>const user = { name: "Alice", age: 25 };',
	'>let counter = 0;',
	'>function incrementCounter() { counter++; }',
	'>const isUserLoggedIn = true;',
	'>if (isUserLoggedIn) ',
	'>const fetchData = async () => { await fetch("/api/data"); };',
	'>const hacker = { name: "Elliot", age: 28 };',
	'>const greeting = (name) => `Hello, ${name}!`;',
]
const textLength = 300
const randomText = ref(generateRandomText())
let interval

function generateRandomText() {
	return Array.from({ length: textLength }, () => jsCode[Math.floor(Math.random() * jsCode.length)]).join(' ')
}

onMounted(() => {
	interval = setInterval(() => {
		randomText.value = generateRandomText()
	}, 350)
})

onBeforeUnmount(() => {
	clearInterval(interval)
})
</script>

<template>
	<ClientOnly>
		<div>
			<div class="h-4 bg-gray-500 rounded-t-lg flex justify-between items-center px-2">
				<div class="flex space-x-1">
					<div class="rounded-full bg-red-500 size-2"></div>
					<div class="rounded-full bg-yellow-500 size-2"></div>
					<div class="rounded-full bg-green-500 size-2"></div>
				</div>
				<div class="text-white text-xs font-matrix">Macbook-Pro</div>
				<div class="flex items-center text-gray-300">
					<Icon name="carbon:mac-option" class="size-3" />
					<Icon name="carbon:mac-command" class="size-3" />
					<span class="text-xs">1</span>
				</div>
			</div>
			<div
				class="relative bg-black h-56 w-full text-gray-300 font-mono p-4 rounded-b-lg border border-gray-700 overflow-hidden"
			>
				<p class="text-xs tracking-widest">{{ randomText }}</p>
				<span class="absolute top-2 right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">BUILDING...</span>
			</div>
		</div>
	</ClientOnly>
</template>

<style scoped>
div {
	font-family: 'Courier New', Courier, monospace;
}
</style>

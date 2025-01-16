<script lang="ts" setup="">
const { isMobileMenuOpen, open } = useMobileMenu()
</script>
<template>
	<div class="flex lg:hidden">
		<button
			type="button"
			class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700 dark:text-muted-200"
			@click="open"
		>
			<span class="sr-only">Open main menu</span>
			<Icon
				name="heroicons:bars-3-20-solid"
				class="h-6 w-6 text-white"
				aria-hidden="true"
			/>
		</button>
	</div>
</template>

<script setup>
const { navBar } = usePortfolioInfo()
const { items, logo, userLogo } = navBar
</script>

<template>
	<div>
		<div class="w-full fixed top-0 z-10 bg-slate-800">
			<div class="flex justify-between max-w-5xl mx-auto px-4">
				<NavBarBrand />
				<NavBarMenu />
				<NavBarUserAvatar />
				<NavBarMobileMenuButton />
			</div>
			<NavBarMobileMenu />
		</div>
	</div>
</template>

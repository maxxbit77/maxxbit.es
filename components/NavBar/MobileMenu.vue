<script setup>
import {
	Dialog,
	DialogPanel,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue'

const { navBar } = usePortfolioInfo()
const { items, logo } = navBar
const { isMobileMenuOpen, close } = useMobileMenu()
</script>
<template>
	<TransitionRoot :show="isMobileMenuOpen" as="template">
		<Dialog
			as="div"
			class="lg:hidden transition-all fixed top-0 z-20 w-full pe-2"
			@close="close"
			:open="isMobileMenuOpen"
		>
			<TransitionChild
				as="template"
				enter="transition-opacity ease-linear duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="transition-opacity ease-linear duration-300"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 z-10" />
			</TransitionChild>
			<TransitionChild
				as="template"
				enter="transition ease-in-out duration-300 transform"
				enter-from="-translate-y-full"
				enter-to="translate-y-0"
				leave="transition ease-in-out duration-300 transform"
				leave-from="translate-y-0"
				leave-to="-translate-y-full"
			>
				<DialogPanel
					class="transition-all absolute inset-0 right-0 z-50 w-full h-screen overflow-y-auto bg-slate-800 dark:bg-muted-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				>
					<div class="flex items-center justify-between">
						<div class="flex flex-1 shrink-0">
							<img
								class="-m-1.5 p-1.5 shrink-0 flex-1"
								:src="logo"
							/>
						</div>
						<button
							class="-m-2.5 rounded-md p-2.5 text-gray-700"
							@click="close"
						>
							<span class="sr-only">Close menu</span>
							<Icon
								name="heroicons:x-mark"
								class="h-6 w-6"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/10">
							<div class="space-y-2 py-6">
								<NuxtLink
									v-for="item in items"
									:key="item.text"
									:to="item.url"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-slate-100 hover:bg-primary-600"
									@click="close"
								>
									{{ item.text }}
								</NuxtLink>
							</div>
						</div>
					</div>
				</DialogPanel>
			</TransitionChild>
		</Dialog>
	</TransitionRoot>
</template>

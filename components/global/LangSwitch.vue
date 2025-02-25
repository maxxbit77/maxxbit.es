<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import { useCookie } from '#app'
import { useI18n, useSwitchLocalePath } from '#i18n'

const { locale, setLocale, finalizePendingLocaleChange } = useI18n()
const languageCookie = useCookie('locale', { default: () => 'en' })
const switchLocalePath = useSwitchLocalePath()

const switchState = ref(locale.value === 'es')

watch(switchState, async (newValue) => {
	const newLang = newValue ? 'es' : 'en'

	languageCookie.value = newLang
	await setLocale(newLang)

	const newPath = switchLocalePath(newLang)
	window.location.href = newPath
})

onBeforeUnmount(async () => {
	await finalizePendingLocaleChange()
})
</script>

<template>
	<div class="flex gap-2 items-center">
		<SwitchRoot
			id="language-switch"
			v-model:checked="switchState"
			class="w-[60px] h-[25px] focus-within:outline focus-within:outline-black flex bg-slate-800 shadow-sm rounded-full relative data-[state=checked]:bg-slate-800 cursor-pointer"
		>
			<span class="absolute left-1">🇪🇸</span>
			<SwitchThumb
				class="block w-[21px] z-10 h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[32px]"
			/>
			<span class="absolute left-8 z-0">🇬🇧</span>
		</SwitchRoot>
	</div>
</template>

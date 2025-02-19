<script setup>
import { initFlowbite } from 'flowbite'

const { myInfo } = usePortfolioInfo()
const socials = myInfo.socials
const contact = myInfo.contact

const textToCopy = ref(contact.email)
const copied = ref(false)

const email = {
	myEmail: contact.email,
	subject: 'Inquiry about your portfolio',
	body: 'Hello Maxiel, I came across your portfolio and I am very interested in your work. Let’s connect!',
}
const subject = 'Inquiry about your portfolio'
const body = 'Hello Maxiel, I came across your portfolio and I am very interested in your work. Let’s connect!'

const copyText = () => {
	navigator.clipboard.writeText(textToCopy.value)
	copied.value === false ? (copied.value = true) : (copied.value = false)
}

onMounted(() => {
	initFlowbite()
})
</script>
<template>
	<div
		class="md:mt-8 flex-wrap flex flex-col space-y-2 items-center justify-center space-x-4 md:block md:space-x-0 w-2/3"
	>
		<h3 class="text-accent font-matrix uppercase text-xl">Want to connect?</h3>
		<ul class="text-secondary-400 flex justify-start items-center gap-x-2">
			<li v-for="(social, index) in socials" :key="index">
				<button
					type="button"
					class="hover:text-matrix h-5 font-matrix transition-all duration-500 ease-in-out border-r border-matrix pr-2"
				>
					<a :href="social.url" target="_blank" :aria-label="social.name">
						<Icon v-if="social.icon" :name="social.icon" class="h-8 w-8" />
						<span v-else>
							{{ social.name }}
						</span>
					</a>
				</button>
			</li>
			<li class="w-full">
				<a href="/CV-Maxi Roig-2025-MAR-EN.pdf" download aria-label="Download CV">
					<div
						class="font-matrix w-full transition-all hover:text-matrix duration-500 ease-in-out text-white"
					>
						Read CV
					</div>
				</a>
			</li>
		</ul>
		<div
			class="h-8 w-full rounded-lg bg-slate-800 px-2 text-gray-400 flex border items-center justify-between font-matrix"
		>
			{{ contact.email }}
			<div class="space-x-2 flex items-center">
				<div>
					<button
						@click="copyText"
						data-tooltip-target="copy"
						type="button"
						aria-label="Copy"
						class="hover:text-matrix-300 transition-all duration-300 ease-in"
					>
						<div class="">
							<Icon v-if="!copied" name="pixelarticons:section-copy" class="size-6" />
							<Icon v-else name="pixelarticons:check" class="size-6" />
						</div>
					</button>
					<div
						id="copy"
						role="tooltip"
						class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
					>
						{{ copied === true ? 'Copied' : 'Copy' }}
						<div class="tooltip-arrow" data-popper-arrow></div>
					</div>
				</div>

				<div>
					<button data-tooltip-target="send" type="button" aria-label="Send">
						<a
							:href="`mailto:${email.myEmail}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`"
							aria-label="Send email"
						>
							<Icon
								name="pixelarticons:mail-arrow-right"
								class="size-6 text-gray-500 transition-all duration-500 ease-in-out hover:text-matrix-300"
							/>
						</a>
					</button>
					<div
						id="send"
						role="tooltip"
						class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
					>
						Send Email
						<div class="tooltip-arrow" data-popper-arrow></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

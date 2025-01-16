<script setup lang="ts">
import { initFlowbite } from 'flowbite'

const { myInfo } = usePortfolioInfo()
const socials = myInfo.socials
const contact = myInfo.contact

const textToCopy = ref(contact.email)
const copied = ref(false)

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
		class="mx-auto md:mt-8 flex-wrap flex items-center justify-center space-x-4 md:block md:space-x-0"
	>
		<ul class="text-secondary-400 flex justify-start gap-x-2">
			<li v-for="(social, index) in socials" :key="index">
				<button
					:data-tooltip-target="social.id"
					type="button"
					class="hover:text-primary-300 transition-all duration-500 ease-in-out"
				>
					<a
						:href="social.url"
						target="_blank"
						:aria-label="social.name"
					>
						<Icon :name="social.icon" class="h-8 w-8" />
					</a>
				</button>
				<div
					:id="social.id"
					role="tooltip"
					class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
				>
					{{ social.name }}
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
			</li>
			<li>
				<button
					data-tooltip-target="pdf"
					type="button"
					class="hover:text-primary-300 transition-all duration-500 ease-in-out"
					aria-label="Download CV"
				>
					<a href="/CV.pdf" download aria-label="Download CV">
						<Icon name="mdi:cloud-download" class="h-8 w-8" />
					</a>
				</button>
				<div
					id="pdf"
					role="tooltip"
					class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
				>
					Download CV
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
			</li>
		</ul>
		<div class="mt-2">
			<div
				class="h-10 w-72 rounded-lg bg-slate-800 px-2 text-gray-400 flex border items-center justify-between"
			>
				{{ contact.email }}
				<div class="space-x-2 flex items-center">
					<div>
						<button
							@click="copyText"
							data-tooltip-target="copy"
							type="button"
							aria-label="Copy"
							class="hover:text-primary-300 transition-all duration-300 ease-in"
						>
							<div class="">
								<Icon
									v-if="!copied"
									name="mdi:content-copy"
									class="h-7 w-7"
								/>
								<Icon
									v-else
									name="icon-park-outline:file-success"
									class="h-7 w-7"
								/>
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
						<button
							data-tooltip-target="send"
							type="button"
							aria-label="Send"
						>
							<a
								:href="`mailto:${contact.email}`"
								aria-label="Send email"
							>
								<Icon
									name="mdi:send"
									class="h-7 w-7 text-gray-500 transition-all duration-500 ease-in-out hover:text-primary-300"
								/>
							</a>
						</button>
						<div
							id="send"
							role="tooltip"
							class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
						>
							Send
							<div class="tooltip-arrow" data-popper-arrow></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

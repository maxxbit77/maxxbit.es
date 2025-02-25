<script setup>
const props = defineProps({
	myInfo: Object,
})

const socials = props.myInfo.socials
const contact = props.myInfo.contact

const textToCopy = ref(contact.email)
const copied = ref(false)

const email = {
	myEmail: contact.email,
	subject: 'Inquiry about your portfolio',
	body: 'Hello Maxi, I came across your portfolio and I am very interested in your work. Let’s connect!',
}

const openWhatsApp = () => {
	const phoneNumber = '34699369519'
	window.open(`https://wa.me/${phoneNumber}`, '_blank')
}

const copyText = () => {
	navigator.clipboard.writeText(textToCopy.value)
	copied.value === false ? (copied.value = true) : (copied.value = false)
}

const buttonDescription = ref(contact.defaultDescription)
</script>

<template>
	<div class="mt-6 flex flex-col space-y-10 justify-center w-full">
		<div class="space-x-2 flex items-end transition-all">
			<button
				@mouseenter="buttonDescription = contact.copyEmail"
				@mouseleave="buttonDescription = contact.sendEmail"
				@click="copyText"
				class="group relative transition-all duration-300 ease-in border border-gray-600 hover:border-matrix rounded-xl p-2"
			>
				<Icon
					name="lucide:copy"
					class="size-6 text-white transition-colors duration-300 ease-in group-hover:text-matrix"
				/>
			</button>

			<button
				@mouseenter="buttonDescription = contact.sendEmail"
				@mouseleave="buttonDescription = contact.defaultDescription"
				class="group relative transition-all duration-300 ease-in border border-gray-600 hover:border-matrix rounded-xl p-2"
			>
				<a
					:href="`mailto:${email.myEmail}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`"
					aria-label="Send email"
				>
					<Icon
						name="lucide:mail-plus"
						class="size-6 text-white transition-colors duration-300 ease-in group-hover:text-matrix"
					/>
				</a>
			</button>

			<button
				@mouseenter="buttonDescription = contact.whatsapp"
				@mouseleave="buttonDescription = contact.defaultDescription"
				@click="openWhatsApp"
				class="group relative transition-all duration-300 ease-in border border-gray-600 hover:border-matrix rounded-xl p-2"
			>
				<Icon
					name="garden:whatsapp-stroke-16"
					class="size-6 text-white transition-colors duration-300 ease-in group-hover:text-matrix"
				/>
			</button>

			<div>
				<div class="text-accent font-matrix uppercase text-xl">{{ contact.wantToChat }}</div>
				<div
					class="text-sm"
					:class="buttonDescription === contact.defaultDescription ? 'text-gray-500' : 'text-white'"
				>
					{{ buttonDescription }}
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<h3 class="text-2xl text-accent font-matrix uppercase">{{ contact.stalkMe }}</h3>
			<ul class="flex items-center space-x-4 text-md">
				<li v-for="(social, index) in socials" :key="index">
					<div>
						<a :href="social.url" target="_blank" :aria-label="social.name">
							<EffectUnderscore> {{ social.name }} </EffectUnderscore>
						</a>
					</div>
				</li>
				<li>
					<a href="/CV-Maxi Roig-2025-MAR-EN.pdf" download aria-label="Download CV">
						<EffectUnderscore> {{ contact.readCV }} </EffectUnderscore>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

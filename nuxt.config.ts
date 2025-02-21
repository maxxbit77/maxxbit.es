// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/tailwind.css'],
	modules: ['@nuxt/image', 'nuxt-icon', '@tresjs/nuxt', 'radix-vue/nuxt'],

	// @ts-ignore
	assets: {
		css: ['~/assets/css/colors.css'],
	},

	imports: {
		autoImport: true,
	},

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	app: {
		head: {
			title: 'Maxxbit',
			htmlAttrs: {
				lang: 'en',
			},

			meta: [
				{ charset: 'utf-8' },
				{ name: 'application-name', content: "Maxxbit's Portfolio" },
				{
					name: 'apple-mobile-web-app-title',
					content: "Maxxbit's Portfolio",
				},
				{
					name: 'viewport',
					content: 'width=device-width,initial-scale=1,user-scalable=yes',
				},
				{ name: 'mobile-web-app-capable', content: 'yes' },
				{
					name: 'apple-mobile-web-app-status-bar-style',
					content: 'black-translucent',
				},
				{ name: 'msapplication-TileColor', content: '#0a0324' },
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap',
				},
			],
		},
	},

	image: {
		dir: 'public',
	},

	compatibilityDate: '2025-01-16',
	ssr: false,
})

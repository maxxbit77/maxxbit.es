// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo-maxxbit-no-bg' }],
 devtools: { enabled: true },
 css: ['~/assets/css/tailwind.css'],
 modules: ['@nuxt/image', 'nuxt-icon'],

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
									link: [
													{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
													{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
													{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
													{ rel: 'manifest', href: '/site.webmanifest' },
													{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
													{ rel: 'shortcut icon', href: '/favicon.ico' },
									],
									meta: [
													{ charset: 'utf-8' },
													{ name: 'application-name', content: "Maxxbit's Portfolio" },
													{
																	name: 'apple-mobile-web-app-title',
																	content: "Maxxbit's Portfolio",
													},
													{
																	name: 'viewport',
																	content:
																					'width=device-width,initial-scale=1,user-scalable=yes',
													},
													{ name: 'mobile-web-app-capable', content: 'yes' },
													{
																	name: 'apple-mobile-web-app-status-bar-style',
																	content: 'black-translucent',
													},
													{ name: 'msapplication-TileColor', content: '#0a0324' },
									],
					},
	},

 image: {
					dir: 'public',
	},

 compatibilityDate: '2025-01-16',
})
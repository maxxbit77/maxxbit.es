/** @type {import('tailwindcss').Config} */

export default {
	darkMode: 'class',
	safelist: ['bg-slate-950'],
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
		'./node_modules/flowbite/**/*.js',
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				primary: {
					50: '#E3FCF9',
					100: '#C8F9F3',
					200: '#91F3E8',
					300: '#59EDDC',
					400: '#22E7D0',
					500: '#14B8A6',
					600: '#109384',
					700: '#0C6E63',
					800: '#084A42',
					900: '#042521',
					950: '#021210',
				},
				secondary: {
					50: '#F1F2F3',
					100: '#E0E2E5',
					200: '#C2C5CC',
					300: '#A6ABB5',
					400: '#888E9B',
					500: '#6B7280',
					600: '#565C67',
					700: '#41454E',
					800: '#2A2D32',
					900: '#151619',
					950: '#0C0C0E',
				},
				matrix: {
					light: '#72DCB7',
					DEFAULT: '#1bf9ab',
					dark: '#349573',
				},
				accent: {
					light: '##DB9D5A',
					DEFAULT: '#ff8500',
					dark: '#CF7717',
				},
			},
			fontFamily: {
				matrix: ['Share Tech Mono', 'monospace'],
			},
		},
		plugins: [require('flowbite/plugin'), 'prettier-plugin-tailwindcss'],
	},
}

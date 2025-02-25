export const usePortfolioES = () => {
	const navBar = {
		items: [
			{ text: 'Experiencia', url: '/#experience' },
			{ text: 'Proyectos', url: '/#projects' },
			{ text: 'Tecnologías', url: '/#stack' },
			{ text: 'Estudios', url: '/#studies' },
		],
		logo: '/brand/logo-vertical.png',
		userLogo: '/brand/only-logo-nobg.png',
	}

	const myInfo = {
		nickName: '@maxxbit',
		name: 'Maxi Roig',
		occupation: 'Desarrollador Front-end UI',
		slogan: 'Enfocado en Interacciones y Diseño',
		presentation: {
			firstParagraph:
				'Construyo aplicaciones rápidas e intuitivas que se sienten como una extensión natural de tu mente, utilizando diseños flexibles para obtener interfaces fluidas y sin interrupciones.',
			firstParagraphhighlighted: '',
			secondParagraph: '',
			secondParagraphhighlighted: 'Conecto el diseño y la ingeniería',
			thirdParagraph: ', asegurando que tu producto reciba la atención al detalle que necesita para',
			thirdParagraphhighlighted: 'destacarse entre la competencia. 🚀',
		},

		image: '/profile.png',
		socials: [
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/maxi-roig/',
				id: '1',
			},
			{
				name: 'GitHub',
				url: 'https://github.com/maxxbit77',
				id: '2',
			},
		],
		contact: {
			wantToChat: '¿Hablamos?',
			copyEmail: 'Copiar email al portapapeles',
			sendEmail: 'Enviar correo',
			whatsapp: 'Chat por WhatsApp',
			defaultDescription: 'Envíame un correo',
			stalkMe: 'Écha un ojo  👀',
			readCV: 'Leer CV',
			text: 'Copiar Email',
			icon: 'pixelarticons:cloud-download',
			email: 'maxielcade04@gmail.com',
		},
	}

	const experience = {
		title: 'XP Obtenida 🎮',
		show: {
			more: 'Mostrar más >>',
			less: '<< Mostrar menos',
		},
		responsabilities: 'Responsabilidades',
		tech: 'Tecnologías',
		list: [
			{
				projectName: 'BeKultura',
				companyName: 'Beon WorldWide',
				startAt: '2024',
				endsAt: '2025',
				position: 'Desarrollador Front-end',
				description:
					'Una plataforma de venta de entradas que permite a los organizadores de eventos crear y vender boletos para conciertos, teatro y otros eventos en vivo. Cuenta con procesamiento de pagos seguro, disponibilidad de entradas en tiempo real y selección interactiva de asientos. La plataforma también ofrece herramientas de promoción de eventos e integración con los principales canales de marketing.',
				responsibilities: [
					'Desarrollo de una plataforma interna de venta de entradas.',
					'Mejora enla experiencia de usuario en la compra de tickets.',
					'Desarrollo de herramientas para la gestión de eventos.',
				],
				url: 'https://beonworldwide.com/es',
				tags: ['JS(ES6)', 'TypeScript', 'Vue 3', 'Nuxt 3', 'Tailwind 3', 'Vitest', 'Git', 'D3.js', 'REST API'],
				image: {
					url: '/images/experience/mockup-beonWW.webp',
					alt: 'mockup Tickets seller',
				},
				video: 'https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740275588/beon_kps6qr.mp4',
			},
			{
				projectName: 'Squinbox',
				companyName: 'Mosaiqo S.L.',
				startAt: '2023',
				endsAt: '2024',
				position: 'Desarrollador Front-end',
				description:
					'Plataforma diseñada para conectar creadores de newsletters. Permite a los usuarios colaborar con otros boletines para crecer juntos. Al registrarse, los creadores pueden agregar sus newsletters al directorio, encontrar otros con intereses similares y proponer promociones cruzadas para expandir su base de suscriptores.',
				responsibilities: [
					'Diseño de interfaz de usuario intuitiva.',
					'Desarrollo de sistema de perfiles de usuario.',
					'Mejoras en el rendimiento y la velocidad de carga.',
				],
				url: 'https://squinbox.com/',
				tags: ['JS(ES6)', 'Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind', 'FormKit', 'Prisma', 'Pinia'],
				image: {
					url: '/images/experience/mockup-sq.webp',
					alt: 'mockup Squinbox',
				},
				video: 'https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740275596/squinbox_ruhxzv.mp4',
			},
			{
				projectName: 'Rapid Launch',
				companyName: 'Mosaiqo S.L.',
				startAt: '2023',
				endsAt: '2023',
				position: 'Desarrollador Front-end',
				description:
					'Asistente de lanzamiento de startups que agiliza el proceso de creación y despliegue de nuevos negocios. Proporciona herramientas para integraciones de características, gestión de proyectos y despliegue automatizado de sitios web para acelerar la estrategia de salida al mercado.',
				responsibilities: [
					'Desarrollo de un boilerplate basado en Vue 3 y Nuxt.',
					'Diseño una configuración fácil para no desarrolladores.',
					'Mejoras constantes en la escalabilidad y mantenibilidad.',
					'Integraciónes de múltiples funcionalidades y librerías.',
				],
				url: 'https://rapidlaunch.it/',
				tags: ['JS(ES6)', 'Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind', 'Pinia', 'Radix', 'Shadcn', 'Vitest'],
				image: { url: '/images/experience/mockup-rl.webp', alt: 'mockup RapidLaunch' },
				video: 'https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740275508/rapid-launch_ydnzab.mp4',
			},
			{
				projectName: 'NFUT Cards',
				companyName: 'Mosaiqo S.L.',
				startAt: '2020',
				endsAt: '2021',
				position: 'Desarrollador Front-end',
				description:
					'Un juego de cartas coleccionables digitales basado en jugadores de fútbol reales. Los usuarios pueden coleccionar, intercambiar y competir con sus cartas de jugadores NFT, con estadísticas dinámicas que se actualizan en función del rendimiento real en los partidos.',
				responsibilities: [
					'Desarrolo de estructura y el diseño del sitio web.',
					'Diseños de cartas y animaciónes',
					'Desarrollo de plataforma de creación con arrastrar y soltar.',
					'Sistema de usuarios con billeteras Web3.',
				],
				url: 'https://twitter.com/nfutcards',
				tags: ['HTML5', 'Css3', 'Vue 3', 'Nuxt 3', 'Web sockets', 'Web 3', 'UI/UX'],
				video: 'https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740275664/nfut_w6ijfd.mp4',
			},
			{
				projectName: 'Horizon Hub',
				companyName: 'Mosaiqo S.L.',
				startAt: '2022',
				endsAt: '2023',
				position: 'Desarrollador Front-end',
				description:
					'Una plataforma comunitaria que conecta fundadores de startups con early adopters. Permite a los creadores validar sus ideas y recibir comentarios valiosos antes del lanzamiento, mientras que los usuarios pueden descubrir e influir en nuevas innovaciones desde sus primeras etapas.',
				responsibilities: [
					'Mejora en la interfaz de usuario de la plataforma.',
					'Desarrollo de algoritmos para evaluar la viabilidad de ideas.',
					'Optimización en el sistema para obtener información rápida.',
				],
				url: 'https://horizonhub.io/',
				tags: ['JS(ES6)', 'Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind', 'Pinia', 'axios', 'REST API'],
				image: { url: '/images/experience/mockup-nfut.webp', alt: 'mockup NFUTCards' },
				video: 'https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740275520/horizonhub_dfam9g.mp4',
			},
		],
	}

	const projects = {
		title: 'Lo que se viene 🚀',
		soon: 'Próximamente',
		list: [
			{
				projectName: 'FinancesFlow',
				companyName: 'Proyecto',
				startAt: '2024',
				endsAt: 'Actualidad',
				position: '',
				description:
					'Aplicación de gestión financiera que ayuda a los usuarios a rastrear sus cuentas bancarias, efectivo, inversiones y criptomonedas. Proporcionará una visión clara del estado financiero con gráficos interactivos y datos de mercado en tiempo real.',
				url: 'https://github.com/maxxbit77/finance-manager',
				tags: [
					'Bitcoin',
					'Criptomonedas',
					'Finanzas',
					'Mercados',
					'Cartera',
					'Gráficos',
					'Noticias',
					'Inversiones',
					'Acciones',
					'Portafolio',
					'Trading',
					'Análisis',
					'Tendencias',
				],
			},
			{
				projectName: 'Vibency',
				companyName: 'Proyecto',
				startAt: '2024',
				endsAt: 'Actualidad',
				description:
					'Una aplicación donde los usuarios comparten su estado de ánimo en un mapa utilizando emotes. Publica tus sentimientos, explora emociones globales en tiempo real y conéctate a través de una experiencia emocional compartida.',
				technologies: ['Vue.js', 'Vuex', 'REST API', 'SCSS'],
				url: 'https://github.com/maxxbit77/Vibency-frontend-clone',
				tags: [
					'Ubicación en tiempo real',
					'Emociones',
					'Social',
					'Mapa',
					'Geolocalización',
					'Emotes',
					'Estado de ánimo',
					'Sentimientos',
				],
			},
		],
	}

	const stack = {
		title: 'La Estantería Tech 📚',
		skill: 'Nivel',
	}

	const courses = {
		title: 'Escalando Niveles 🏆',
		list: [
			{
				courseName: 'React',
				author: 'Maximilian Schwarzmuller',
				duration: '40,5',
				lessons: '543',
				rating: 4.6,
				image: { url: '/images/studies/react.webp', alt: 'React' },
				status: 'En progreso',
				url: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
				tags: ['Redux', 'Peticiones', 'Enrutamiento', 'Renderizado', 'Hooks', 'Testing', 'Autenticación'],
			},
			{
				courseName: 'NodeJS',
				author: 'Maximilian Schwarzmuller',
				duration: '40,5',
				lessons: '543',
				rating: 4.6,
				image: { url: '/images/studies/node.jpg', alt: 'Node JS' },
				status: 'En progreso',
				url: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
				tags: ['Módulos', 'Peticiones', 'Respuestas', 'Renderizado', 'Express.js', 'Cookies', 'Autenticación'],
			},
			{
				courseName: 'TypeScript',
				author: 'Maximilian Schwarzmuller',
				duration: '15',
				lessons: '198',
				rating: 4.7,
				image: { url: '/images/studies/typescript.jpg', alt: 'TypeScript' },
				status: 'Completado',
				url: 'https://www.udemy.com/course/understanding-typescript/',
				tags: ['Tipos', 'Clases', 'Interfaces', 'Decoradores', 'Namespaces', 'webpack', 'Flujo de trabajo'],
			},
			{
				courseName: 'Nuxt 3 ',
				author: 'Laith Harb',
				duration: '17',
				lessons: '156',
				rating: 4.6,
				image: { url: '/images/studies/nuxt.jpg', alt: 'Nuxt' },
				status: 'Completado',
				url: 'https://www.udemy.com/course/the-nuxt-3-bootcamp-the-complete-developer-guide/',
				tags: ['Peticiones HTTP', 'CSR', 'Layouts', 'useAsyncData', 'Autenticación', 'Supabase', 'useFetch'],
			},
			{
				courseName: 'Vue 3',
				author: 'Maximilian Schwarzmuller',
				duration: '31,5',
				lessons: '331',
				rating: 4.8,
				image: { url: '/images/studies/vue-guide.jpg', alt: 'Vue' },
				status: 'Completado',
				url: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
				tags: [
					'Fundamentos',
					'Reactividad',
					'Eventos',
					'Entornos',
					'Vuex',
					'HTTP',
					'Autenticación',
					'Despliegue',
				],
			},
			{
				courseName: 'JS, HTML, CSS3, NodeJS',
				author: 'Nicolas Schurmann',
				duration: '19',
				lessons: '202',
				rating: 4.6,
				image: { url: '/images/studies/js-html-css-node.jpg', alt: 'JS-HTML-CSS-Node' },
				status: 'Completado',
				url: 'https://www.udemy.com/course/aprende-javascript-es9-html-css3-y-nodejs-desde-cero/',
				tags: ['JS ES9', 'HTML', 'CSS3', 'NodeJS', 'DOM', 'MongoDB', 'RESTful API'],
			},
			{
				courseName: 'JavaScript',
				author: 'Grover Vasquez',
				duration: '16',
				lessons: '174',
				rating: 4.4,
				image: { url: '/images/studies/javascript.jpg', alt: 'JavaScript' },
				status: 'Completado',
				url: 'https://www.udemy.com/course/javascript-moderno-para-principiantes/',
				tags: ['DOM', 'AJAX', 'APIs', 'Node.js', 'Asíncrono', 'Objeto this'],
			},
			{
				courseName: 'Bootstrap',
				author: 'Erick Mines',
				duration: '9,5',
				lessons: '80',
				rating: 4.6,
				image: { url: '/images/studies/bootstrap.jpg', alt: 'Bootstrap' },
				status: 'Completado',
				url: 'https://www.udemy.com/course/curso-la-biblia-perdida-de-bootstrap-4/',
				tags: ['HTML5', 'CSS3', 'Mobile First', 'jQuery', 'Diseño Responsivo'],
			},
			{
				courseName: 'jQuery',
				author: 'Joe Parys',
				duration: '6',
				lessons: '51',
				rating: 4.5,
				image: { url: '/images/studies/jquery.jpg', alt: 'jQuery' },
				status: 'Completado',
				url: 'https://www.udemy.com/course/jquery-tutorial/',
				tags: ['AJAX', 'APIs', 'JS', 'Eventos', 'DOM', 'GitHub', 'Git'],
			},
		],
	}

	const footer = {
		items: [
			{ text: 'Sobre mí', url: '/' },
			{ text: 'Experiencia', url: '/#experience' },
			{ text: 'Proyectos', url: '/#projects' },
			{ text: 'Estudios', url: '/#studies' },
		],
		logo: '/brand/logo-vertical.png',
		userLogo: '/brand/only-logo-nobg.png',
	}
	return {
		navBar,
		myInfo,
		experience,
		projects,
		stack,
		courses,
		footer,
	}
}

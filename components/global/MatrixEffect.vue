<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasRef = ref(null)
let animationFrameId

onMounted(() => {
	const canvas = canvasRef.value
	const ctx = canvas.getContext('2d')

	const resizeCanvas = () => {
		canvas.width = canvas.parentElement.clientWidth
		canvas.height = canvas.parentElement.clientHeight
	}
	window.addEventListener('resize', resizeCanvas)
	resizeCanvas()

	const fontSize = 14
	const columns = Math.floor(canvas.width / fontSize)
	const drops = Array(columns).fill(1)

	const jsCode = [
		'root@system:~# nmap -p- -A 192.168.1.1',
		'Starting Nmap 7.92 ( https://nmap.org )',
		'PORT     STATE SERVICE        VERSION',
		'22/tcp   open  ssh            OpenSSH 8.4p1 Debian',
		'80/tcp   open  http           Apache httpd 2.4.41',
		'3306/tcp open  mysql          MySQL 5.7.33',

		'root@system:~# sqlmap -u "http://target.com/index.php?id=1" --dump-all',
		'[!] WARNING: Illegal access detected. Logging IP: 192.168.1.100',
		'[INFO] Checking for SQL injection vulnerability...',
		"[*] Payload found: ' OR '1'='1",
		'root@system:~# ████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
		'root@system:~# echo "Compiling exploit..." && gcc exploit.c -o exploit',
		'[✔] Compilation successful.',
		'root@system:~# ./exploit',
		'[!] SYSTEM BREACH DETECTED',
		'root@system:~# ████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
		'sysadmin@server:~$ tail -f /var/log/syslog',
		'Feb 18 03:35:20 kernel: [ 7231.502039] TCP: Possible SYN flooding on port 443.',
		'Feb 18 03:35:21 kernel: [ 7232.002831] INTRUSION DETECTED: Unauthorized access attempt blocked.',
		'Feb 18 03:35:25 kernel: [ 7236.129481] Connection closed by 192.168.1.200',

		'██████████  HACK INITIATED ██████████',
		'>>> Connection to ████████████ established...',
		'>>> Bypassing firewall rules... Done.',
		'>>> Escalating privileges... Success.',
		'>>> Injecting payload... ██████████',
		'>>> Access granted. Welcome, root.',
	]

	const speedFactor = 0.3

	function drawMatrix() {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.fillStyle = '#1bf9ab'
		ctx.font = `${fontSize}px "Share Tech Mono", monospace`

		for (let i = 0; i < drops.length; i++) {
			const text = jsCode[Math.floor(Math.random() * jsCode.length)]
			const x = i * fontSize
			const y = drops[i] * fontSize

			const alpha = Math.max(0, 1 - y / canvas.height)
			ctx.globalAlpha = alpha

			ctx.fillText(text, x, y)

			if (y > canvas.height && Math.random() > 0.975) {
				drops[i] = 0
			}

			drops[i] += speedFactor
		}

		ctx.globalAlpha = 1
	}

	function animate() {
		drawMatrix()
		animationFrameId = requestAnimationFrame(animate)
	}

	animate()

	onBeforeUnmount(() => {
		cancelAnimationFrame(animationFrameId)
		window.removeEventListener('resize', resizeCanvas)
	})
})
</script>

<template>
	<canvas ref="canvasRef" class="matrix-canvas opacity-50 lg:opacity-100"></canvas>
</template>

<style scoped>
.matrix-canvas {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;

	-webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
	mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
}
</style>

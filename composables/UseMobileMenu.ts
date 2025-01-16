export const useMobileMenuState = (open: boolean = false) => {
	return useState('mobileOpen', () => open)
}


export const useMobileMenu = (isOpen: boolean = false) => {
	const isMobileMenuOpen = useMobileMenuState(isOpen)
	const open = () => isMobileMenuOpen.value = true
	const close = () => isMobileMenuOpen.value = false
	const toggle = () => isMobileMenuOpen.value = !isMobileMenuOpen.value
	
	return {
		isMobileMenuOpen,
		open,
		close,
		toggle,
	}
}

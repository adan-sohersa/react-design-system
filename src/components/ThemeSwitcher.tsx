'use client'

import React, { useEffect, useState } from 'react'
import { MoonIcon } from '@/src/general/infraestructure/ui/react/icons/MoonIcon'
import { SunIcon } from '@/src/general/infraestructure/ui/react/icons/Sunicon'
import { useTheme } from 'next-themes'
import { Toggle } from '@/src/general/infraestructure/ui/react/Toggle'

enum UiThemes {
	dark = 'dark',
	light = 'light'
}

const ThemeSwitcher: React.FC<any> = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)

		return () => { setMounted(false) }
	}, [])

	if (!mounted) return null

	return (
		<Toggle
			checked={theme === UiThemes.dark}
			onChange={(e) => { setTheme((e.target as HTMLInputElement).checked ? UiThemes.dark : UiThemes.light) }}
			thumbIcon={theme === UiThemes.dark ? <MoonIcon /> : <SunIcon />}
		/>
	)
}

export { type UiThemes, ThemeSwitcher as default }

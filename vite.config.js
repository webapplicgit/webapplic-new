// @ts-check

import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
	plugins: [sveltekit()],
	server: { port: 3000 },
	preview: { port: 3000 },
	define: {
		'process.env.VITE_TAK': JSON.stringify(process.env.VITE_TAK),
		'process.env.VITE_TAT': JSON.stringify(process.env.VITE_TAT),
	},
})

// @ts-check

import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
	plugins: [sveltekit()],
	server: { port: 3000 },
	preview: { port: 3000 },

	define: {
		'process.env.TRELLO_API_KEY': JSON.stringify(process.env.TRELLO_API_KEY),
		'process.env.TRELLO_ACCESS_TOKEN': JSON.stringify(process.env.TRELLO_ACCESS_TOKEN),
	},
})

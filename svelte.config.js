// @ts-check

import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$i18n: 'src/i18n',
		},
	},

	define: {
		'process.env.TRELLO_API_KEY': JSON.stringify(process.env.TRELLO_API_KEY),
		'process.env.TRELLO_ACCESS_TOKEN': JSON.stringify(process.env.TRELLO_ACCESS_TOKEN),
	},
}

export default config

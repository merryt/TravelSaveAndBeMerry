import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			extensions: ['.md']
		}),
		vitePreprocess()
	],

	extensions: ['.svelte', '.md'],
	kit: {
		// default options are shown
		adapter: adapter()
	}
};

export default config;
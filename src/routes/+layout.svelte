<script lang="ts">
	import { page } from '$app/stores'
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import Header from '$lib/Header.svelte'
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte'
	import type { LayoutData } from './$types'
	import "../app.css";
   import Footer from '$lib/Footer.svelte'

	export let data: LayoutData
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale)

	console.info($LL.log({ fileName: '+layout.svelte' }))
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<svelte:head>
	<title>{$page.data.title || 'typesafe-i18n'}</title>
	<HeadHrefLangs />
</svelte:head>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
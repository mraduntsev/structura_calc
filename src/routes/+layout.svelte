<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/theme.svelte';
	import '../app.css';

	let { children } = $props();
	let progress = $state(0);
	let showBackTop = $state(false);

	onMount(() => {
		theme.syncToDom();

		const onScroll = () => {
			const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			progress = max > 0 ? (document.documentElement.scrollTop / max) * 100 : 0;
			showBackTop = document.documentElement.scrollTop > 600;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div
	id="progress"
	class="bg-brand fixed top-0 left-0 z-[70] h-[3px]"
	style="width: {progress}%"
></div>
<div class="noise" aria-hidden="true"></div>

<Navbar />
<main id="top">
	{@render children()}
</main>

<Footer />

{#if showBackTop}
	<button
		type="button"
		onclick={goTop}
		class="border-ink/30 bg-panel hover:border-brand hover:text-brand fixed right-6 bottom-6 z-40 h-11 w-11 border font-mono text-lg transition-all"
		aria-label="Наверх">↑</button
	>
{/if}

<script lang="ts">
	import { resolve } from '$app/paths';
	import { person, sections } from '$lib/content';
	import { theme } from '$lib/theme.svelte';

	let mobileOpen = $state(false);

	function close() {
		mobileOpen = false;
	}	

	const home = resolve('/');
	let active = $state('home');

	$effect(() => {
    const nodes = sections
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active = entry.target.id;
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  });
</script>

<header class="bg-base/85 border-ink/10 fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
		<a href="{home}#top" class="group flex items-center gap-3">
			<span
				class="border-ink group-hover:border-brand group-hover:text-brand font-display flex h-9 w-9 items-center justify-center border-2 text-sm font-bold transition-colors"
				>{person.brandShort}</span
			>
			<span class="leading-tight">
				<span class="font-display block text-[13px] font-bold tracking-wide uppercase"
					>{person.brand}</span
				>
				<span class="text-mute block font-mono text-[10px] tracking-[0.25em] uppercase"
					>{person.brandDesc}</span
				>
			</span>
		</a>

		<nav
			class="text-mute hidden items-center gap-7 font-mono text-[12px] tracking-[0.15em] uppercase lg:flex"
			aria-label="Разделы"
		>
			{#each sections as s (s.id)}
				<a
					href="{home}#{s.id}"
					class="nav-link hover:text-ink transition-colors"
					class:active={active === s.id}>{s.label}
				</a
				>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<a
				href="{home}#contact"
				class="bg-brand hover:bg-ink hidden items-center gap-2 px-4 py-2 font-mono text-[12px] tracking-[0.15em] text-white uppercase transition-colors md:inline-flex"
			>
				Написать <span aria-hidden="true">→</span>
			</a>
			<button
				type="button"
				onclick={() => theme.toggle()}
				class="border-ink/25 hover:border-brand hover:text-brand flex h-9 w-9 items-center justify-center border transition-colors"
				aria-label="Переключить тему"
			>
				{#if theme.isDark}
					<svg
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<circle cx="12" cy="12" r="4" /><path
							d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
						/>
					</svg>
				{:else}
					<svg
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
					</svg>
				{/if}
			</button>
			<button
				type="button"
				class="border-ink/25 flex h-9 w-9 items-center justify-center border lg:hidden"
				aria-label="Меню"
				aria-expanded={mobileOpen}
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				{#if mobileOpen}
					<svg class="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
						><path d="M6 6l12 12M18 6L6 18" /></svg
					>
				{:else}
					<svg class="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
						><path d="M3 6h18M3 12h18M3 18h18" /></svg
					>
				{/if}
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<div class="border-ink/10 bg-base border-t lg:hidden">
			<nav
				class="mx-auto grid max-w-7xl gap-1 px-5 py-4 font-mono text-sm tracking-[0.15em] uppercase"
			>
				{#each sections as s, i (i)}
					<a class="hover:text-brand py-2 transition-colors" href="{home}/#{s.id}" onclick={close}>
						0{i + 1} · {s.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>

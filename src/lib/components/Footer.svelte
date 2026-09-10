<script lang="ts">
	import { resolve } from '$app/paths';
	import { person, sections } from '$lib/content';

	const year = new Date().getFullYear();

	const home = resolve('/');
</script>

<footer class="border-ink/10 bg-base border-t">
	<div class="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
		<div>
			<a href="{home}#top" class="group flex w-fit items-center gap-3">
				<span
					class="border-ink group-hover:border-brand group-hover:text-brand font-display flex h-9 w-9 items-center justify-center border-2 text-sm font-bold transition-colors"
					>{person.brandShort}</span
				>
				<span class="font-display text-[13px] font-bold tracking-wide uppercase"
					>{person.brand}</span
				>
			</a>
			<p class="text-mute mt-4 max-w-xs text-sm">
				{person.role}
			</p>
		</div>
		<nav
			class="text-mute grid grid-cols-2 gap-6 font-mono text-[12px] tracking-[0.15em] uppercase"
			aria-label="Навигация в подвале"
		>
			<div class="space-y-2">
				{#each sections.slice(0, 3) as s (s)}
					<a href="{home}#{s.id}" class="hover:text-brand block transition-colors">{s.label}</a>
				{/each}
			</div>
			<div class="space-y-2">
				{#each sections.slice(3) as s (s)}
					<a href="{home}#{s.id}" class="hover:text-brand block transition-colors">{s.label}</a>
				{/each}
			</div>
		</nav>
		<div class="text-mute space-y-2 font-mono text-[11px] tracking-wider uppercase md:text-right">
			<p>© {year} {person.initials}</p>
			<p class="text-steel">Лист 08 · Инв. № подл. · Подп. и дата</p>
		</div>
	</div>
</footer>

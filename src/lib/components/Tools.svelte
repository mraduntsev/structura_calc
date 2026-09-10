<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { tools } from '$lib/content';
	import { reveal } from '$lib/actions';
</script>

<section id="tools" class="bg-panel2 scroll-mt-24 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 md:px-8">
		<SectionHead num={tools.index} label={tools.kicker} title={tools.title} aside={tools.intro} />

		<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="border-ink/15 bg-panel border p-7" use:reveal>
				<div class="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
					<h3 class="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-mute">
						// {tools.softwareTitle}
					</h3>
					<span class="font-mono text-[11px] uppercase tracking-wider text-mute">
						{tools.softwareNote}
					</span>
				</div>
				<ul>
					{#each tools.software as item (item.name)}
						<li class="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3.5 transition-colors hover:border-brand/40">
							<span class="font-mono text-sm text-ink">{item.name}</span>
							<span class="text-right font-mono text-[11px] uppercase tracking-wider text-mute">
								{item.detail}
							</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="border-ink/15 bg-panel border p-7" use:reveal={{ delay: 100 }}>
				<div class="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
					<h3 class="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-mute">
						// {tools.codesTitle}
					</h3>
					<span class="hidden font-mono text-[11px] uppercase tracking-wider text-mute">
						{tools.codesNote}
					</span>
				</div>
				<ul>
					{#each tools.codes as item (item.name)}
						<li class="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3.5 transition-colors hover:border-brand/40">
							<span class="font-mono text-sm text-ink">{item.name}</span>
							<span class="text-right font-mono text-[11px] uppercase tracking-wider text-mute">
								{item.detail}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
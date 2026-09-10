<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { projects } from '$lib/content';
	import { reveal } from '$lib/actions';
</script>

<section id="projects" class="bg-panel scroll-mt-24 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 md:px-8">
		<SectionHead num={projects.index} label={projects.kicker} title={projects.title} aside="" />

		<ul class="grid gap-4 md:grid-cols-2">
			{#each projects.items as p, i (i)}
				<article
					class="proj-card group flex flex-col border border-ink/20 bg-panel p-7 transition-colors hover:border-brand hover:bg-panel2"
					use:reveal={{ delay: (i % 3) * 100 }}
				>
					<div class="flex flex-col p-6 sm:p-8">
						<div class="flex items-center justify-between gap-3">
							<span class="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{p.tag}</span>
							<span class="font-mono text-[11px] uppercase tracking-[0.2em] text-steel"
								>{String(i + 1).padStart(2, '0')} / {String(projects.items.length).padStart(2, '0')}</span
							>
						</div>
						<h3 class="mt-4 font-display text-xl font-bold uppercase leading-snug tracking-tight text-ink">
							{p.title}
						</h3>
						<p class="mt-1 font-mono text-[11px] uppercase tracking-wider text-mute">
							{p.place}
						</p>
						<dl class="mt-6 flex flex-1 flex-col gap-4 text-sm leading-relaxed">
							<div>
								<dt class="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Задача</dt>
								<dd class="mt-1 text-ink">
									{p.task}
								</dd>
							</div>
							<div>
								<dt class="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Роль</dt>
								<dd class="mt-1 text-ink">
									{p.role}
								</dd>
							</div>
							<div>
								<dt class="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">ПО</dt>
								<dd class="mt-1 text-ink">{p.software}</dd>
							</div>
							<div class="mt-auto border-t border-ink/15 pt-4">
								<dt class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">Результат</dt>
								<dd class="mt-1 text-ink">
									{p.result}
								</dd>
							</div>
						</dl>
					</div>
				</article>
			{/each}
		</ul>
	</div>
</section>
<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { education } from '$lib/content';
	import { reveal } from '$lib/actions';
</script>

<section
	id="education"
	class="scroll-mt-24 py-24 md:py-32"
	aria-labelledby="education-title"
	use:reveal
>
	<div class="mx-auto max-w-7xl px-5 md:px-8">
		<SectionHead num={education.index} label={education.kicker} title={education.title} aside="" />

		<ol>
			{#each education.items as item, i (item.title)}
				<li
					class="border-ink/15 grid gap-2 border-t py-8 last:border-b md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10 md:py-10"
					use:reveal={{ delay: i * 80 }}
				>
					<div>
						<p class="font-mono text-xs uppercase tracking-[0.2em] text-brand">{item.years}</p>
						<p class="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">
							{item.kind}
						</p>
					</div>
					<div>
						<h3 class="font-display font-bold uppercase text-xl leading-snug tracking-tight text-ink">
							{item.title}
						</h3>
						<p class="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">{item.place}</p>
						<p class="mt-3 max-w-2xl text-sm leading-relaxed text-mute">{item.detail}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
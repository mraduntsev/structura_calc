<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { disciplines } from '$lib/content';
	import { reveal } from '$lib/actions';
</script>

<section id="services" class="bg-panel border-ink/10 scroll-mt-24 border-y py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 md:px-8">
		<SectionHead
			num={disciplines.index}
			label={disciplines.kicker}
			title={disciplines.title}
			aside={disciplines.intro}
		/>

		<div class="bg-ink/15 border-ink/15 grid gap-px border md:grid-cols-2 lg:grid-cols-3">
			{#each disciplines.items as s, i (i)}
				<article
					class="group bg-panel hover:bg-panel2 p-7 transition-colors"
					use:reveal={{ delay: (i % 3) * 80 }}
				>
					<p class="text-mute group-hover:text-brand font-mono text-xs transition-colors">
						{s.index}
					</p>
					<h3 class="font-display mt-4 leading-snug font-bold uppercase">{s.title}</h3>
					<p class="text-mute mt-3 text-sm leading-relaxed">{s.description}</p>
					<p class="text-steel mt-4 font-mono text-[10px] tracking-wider uppercase">
						{s.regulation}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>

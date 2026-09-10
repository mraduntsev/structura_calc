<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { process } from '$lib/content';
	import { reveal } from '$lib/actions';
</script>

<section id="process" class="bg-panel border-ink/10 scroll-mt-24 border-y py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 md:px-8">
		<SectionHead
			num={process.index}
			label={process.kicker}
			title={process.title}
			aside={process.intro}
		/>

		<ol class="border-ink/20 relative ml-3 space-y-10 border-l md:ml-5">
			{#each process.steps as step, i (i)}
				<li class="relative pl-10 md:pl-14" use:reveal={{ delay: i * 80 }}>
					<span
						class="bg-base border-brand text-brand absolute top-1 -left-[13px] flex h-6 w-6 items-center justify-center border-2 font-mono text-[10px]"
					>
						{step.index}
					</span>
					<div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
						<h3 class="font-display font-bold uppercase">{step.title}</h3>
						<span class="text-mute font-mono text-[11px]">{step.duration}</span>
					</div>
					<p class="text-mute mt-2 max-w-2xl text-sm">{step.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

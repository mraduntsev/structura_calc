<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { reveal } from '$lib/actions';
	import { about } from '$lib/content';
</script>

<section id="about" class="scroll-mt-24 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 md:px-8">
		<SectionHead num={about.index} label={about.kicker} title={about.title} aside="" />

		<div class="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-20">
			<div class="text-ink space-y-5 leading-relaxed" use:reveal>
				<div class="text-mute space-y-5 leading-relaxed md:text-lg" use:reveal>
					{#each about.paragraphs as p (p.slice(0, 32))}
						<p>
							{p}
						</p>
					{/each}
				</div>
			</div>

			<div>
				<section id="about-principles" class="scroll-mt-24">
					<div class="mt-12" use:reveal>
						<h3 class="text-mute mb-5 font-mono text-xs tracking-[0.3em] uppercase">
							// {about.strengthsTitle}
						</h3>
						<ul class="divide-ink/10 border-ink/10 divide-y border-y">
							{#each about.strengths as p (p.index)}
								<li class="group grid gap-3 py-5 sm:grid-cols-[70px_1fr]">
									<span class="font-display text-brand font-bold">{p.index}</span>
									<p class="text-mute">
										<span class="text-ink font-semibold">{p.title}</span>
										{p.text}
									</p>
								</li>
							{/each}
						</ul>
					</div>
				</section>
			</div>
		</div>
	</div>
</section>

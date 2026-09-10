<script lang="ts">
	interface Props {
		words: string[];
		reverse?: boolean;
		separator?: string;
	}
	let { words, reverse = false, separator = '✦' }: Props = $props();
</script>

<div class="marquee border-ink/10 bg-panel overflow-hidden border-y py-3" aria-hidden="true">
	<div class="marquee-track flex w-max" class:marquee-reverse={reverse}>
		{#each Array(2) as _, i (i)}
			<div
				class="text-mute flex items-center gap-6 pr-6 font-mono text-[12px] tracking-[0.3em] uppercase"
			>
				{#each words as w, j (j)}
					<span>{w}</span>
					{#if j < words.length - 1}
						<span class="text-brand">{separator}</span>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes marquee {
		to {
			transform: translateX(-50%);
		}
	}
</style>

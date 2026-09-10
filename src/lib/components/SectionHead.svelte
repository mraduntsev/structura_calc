<script lang="ts">
	import { reveal } from '$lib/actions';

	interface Props {
		num: string;
		label: string;
		title: string;
		aside?: string;
	}
	let { num, label, title, aside }: Props = $props();
</script>

<div
	class="border-ink/10 mb-14 flex flex-wrap items-end justify-between gap-6 border-b pb-6"
	use:reveal
>
	<div>
		<p class="text-brand mb-3 font-mono text-xs tracking-[0.35em] uppercase">
			{num} / {label}
		</p>
		<h2 class="font-display text-3xl font-bold uppercase md:text-5xl">
			<span class="mask"><span>{title}</span></span>
		</h2>
	</div>
	{#if aside}
		<p class="text-mute hidden max-w-xs text-right text-sm md:block">{aside}</p>
	{/if}
</div>

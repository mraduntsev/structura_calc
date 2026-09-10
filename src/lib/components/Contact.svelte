<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { contacts, person } from '$lib/content';
	import { reveal } from '$lib/actions';
</script>

<section
	id="contact"
	class="bg-panel2 border-ink/10 blueprint-grid scroll-mt-24 border-t py-24 md:py-32"
>
	<div class="mx-auto max-w-7xl px-5 md:px-8">
		<SectionHead num={contacts.index} label={contacts.kicker} title={contacts.title} aside={contacts.intro} />

		<div class="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
			<!-- Контактная сетка -->
			<ul
				class="grid gap-px bg-ink/15 sm:grid-cols-2"
				use:reveal
			>
				{#each contacts.fields as field (field.label)}
					<li class="bg-panel px-0 py-4 transition-colors hover:bg-panel2 sm:p-5">
						<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
							{field.label}
						</p>
						{#if field.href}
							<a
								href={field.href}
								class="mt-1.5 inline-block font-mono text-sm font-medium tracking-wide text-ink break-all underline-offset-4 hover:text-brand hover:underline"
							>
								{field.value}
							</a>
						{:else}
							<p class="mt-1.5 font-mono text-sm font-medium tracking-wide text-ink">
								{field.value}
							</p>
						{/if}
					</li>
				{/each}
			</ul>

			<div class="flex flex-col justify-end gap-6" use:reveal={{ delay: 150 }}>
				<div class="border border-ink/20 bg-base p-3">
					<div class="grid grid-cols-2 gap-px bg-ink/20 font-mono text-[9.5px] uppercase tracking-wider md:grid-cols-4">
						<div class="col-span-2 bg-panel px-2.5 py-2 text-mute md:col-span-3">
							Контакт: <span class="text-ink">{person.initials}</span>
						</div>
						<div class="bg-panel px-2.5 py-2 text-mute">
							Лист <span class="text-ink">{contacts.index}</span>
						</div>
						<div class="bg-panel px-2.5 py-2 text-mute">
							Статус <span class="text-brand">Открыт</span>
						</div>
						<div class="bg-panel px-2.5 py-2 text-mute">
							Ответ <span class="text-ink">≤ 3 ч</span>
						</div>
						<div class="bg-panel px-2.5 py-2 text-mute">
							Гео <span class="text-ink">РФ / СНГ</span>
						</div>
					</div>
				</div>
				<p class="font-mono text-[11px] uppercase tracking-wider text-mute">
					Предпочтительный способ связи — Telegram или email.
					<br />
					Для срочных задач — звонок в рабочее время (пн–пт, 9–19 МСК).
				</p>
			</div>
		</div>
	</div>
</section>
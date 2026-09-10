<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal, decode } from '$lib/actions';
	import { hero, person } from '$lib/content';

	const home = resolve('/');
</script>

<section class="pt-16">
	<div class="mx-auto max-w-7xl px-4 py-6 md:px-8">
		<div class="border-ink/15 blueprint-grid relative border">
			<span class="border-brand absolute top-0 left-0 h-4.5 w-4.5 border-t-2 border-l-2"></span>
			<span class="border-brand absolute top-0 right-0 h-4.5 w-4.5 border-t-2 border-r-2"></span>
			<span class="border-brand absolute bottom-0 left-0 h-4.5 w-4.5 border-b-2 border-l-2"></span>
			<span class="border-brand absolute right-0 bottom-0 h-4.5 w-4.5 border-r-2 border-b-2"></span>

			<div
				class="grid gap-10 px-6 py-14 md:px-14 md:py-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-14 xl:px-20"
			>
				<div>
					<div
						class="text-mute flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.2em] uppercase"
						use:reveal
					>
						<span class="border-ink/20 border px-3 py-1">{hero.role}</span>
						<span class="border-ink/20 border px-3 py-1">СП / ГОСТ</span>
						<span class="text-brand border-brand/60 border px-3 py-1">{hero.availability}</span>
					</div>

					<h1
						class="font-display mt-8 text-[clamp(1.9rem,4.6vw,3.9rem)] leading-[1.06] font-bold uppercase"
					>
						<span class="block" use:decode={{ delay: 250 }}>Расчёт зданий</span>
						<span class="block" use:decode={{ delay: 550 }}>и сооружений</span>
						<span class="text-outline block" use:decode={{ delay: 850 }}>
							{hero.sections}
						</span>
					</h1>

					<p
						class="mt-7 max-w-xl text-base leading-relaxed md:text-lg"
						use:reveal={{ delay: 15e12 }}
					>
						{hero.lead}
					</p>

					<div class="mt-9 flex flex-wrap gap-4" use:reveal={{ delay: 250 }}>
						<a
							href="{home}#projects"
							class="bg-brand hover:bg-ink group inline-flex items-center gap-3 px-7 py-4 font-mono text-[13px] tracking-[0.18em] text-white uppercase transition-colors"
						>
							Смотреть проекты <span
								class="transition-transform group-hover:translate-x-1"
								aria-hidden="true">→</span
							>
						</a>
						<a
							href="{home}#contact"
							class="border-ink/30 hover:border-brand hover:text-brand inline-flex items-center gap-3 border px-7 py-4 font-mono text-[13px] tracking-[0.18em] uppercase transition-colors"
						>
							Обсудить задачу
						</a>
					</div>
				</div>

				<div use:reveal={{ delay: 200 }}>
					<div class="border-ink/25 bg-panel relative border p-3">
						<div class="relative overflow-hidden">
							<img
								src="{home}hero/frame.webp"
								alt="Изометрическая схема стального каркаса здания"
								class="kenburns block h-auto w-full"
								fetchpriority="high"
							/>
							<span
								class="border-brand text-brand bg-base/75 absolute top-4 right-4 -rotate-6 border-2 px-3 py-1.5 font-mono text-[11px] tracking-[0.25em] uppercase backdrop-blur"
							>
								Расчёт сошёлся ✓
							</span>
							<span
								class="text-steel absolute bottom-3 left-4 font-mono text-[10px] tracking-[0.3em] uppercase"
							>
								Лист 01 · Каркас, изометрия
							</span>
						</div>
						<div
							class="bg-ink/20 border-ink/20 mt-3 grid grid-cols-4 gap-px border font-mono text-[9.5px] tracking-wider uppercase md:text-[10px]"
						>
							<div class="bg-panel text-mute col-span-3 px-2.5 py-2">
								Объект: <span class="text-ink">Каркас</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Шифр <span class="text-ink">РР-26</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Разраб. <span class="text-ink">{person.initials}</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Пров. <span class="text-ink">———</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Н.контр. <span class="text-ink">———</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Утв. <span class="text-ink">———</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Лист <span class="text-ink">01</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Листов <span class="text-ink">06</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Масштаб <span class="text-ink">1:100</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Дата <span class="text-ink">03.09.26</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								Стадия <span class="text-ink">П</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								СП <span class="text-ink">16.13330</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								СП <span class="text-ink">63.13330</span>
							</div>
							<div class="bg-panel text-mute px-2.5 py-2">
								ГОСТ <span class="text-ink">27751</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

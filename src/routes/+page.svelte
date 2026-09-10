<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Help from '$lib/components/Help.svelte';
	import Shorts from '$lib/components/Shorts.svelte';
	import Process from '$lib/components/Process.svelte';
	import Tools from '$lib/components/Tools.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import { marqueeWords, person, regulations } from '$lib/content';
	import Education from '$lib/components/Education.svelte';
</script>

<svelte:head>
	<title>{person.fullName} — расчёты зданий и сооружений</title>
	<meta
		name="description"
		content="Расчёт и проектирование металлических и железобетонных конструкций: КМ, КЖ, поверочные расчёты, обследования. Портфолио инженера-расчётчика."
	/>
</svelte:head>

<Hero />
<Marquee words={marqueeWords} />
<About />
<Help />
<Process />
<Shorts />
<Tools />
<Marquee words={regulations} reverse = {true} />
<Education />
<Contact />

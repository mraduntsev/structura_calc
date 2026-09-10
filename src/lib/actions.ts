import { browser } from '$app/environment';

type RevealOptions = {
	delay?: number;
	threshold?: number;
	rootMargin?: string;
	once?: boolean;
	className?: string;
};

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const {
		delay: initialDelay = 0,
		threshold: initialThreshold = 0.15,
		rootMargin: initialRootMargin = '0px 0px -6% 0px',
		once = true,
		className = 'is-in'
	} = options;

	let delay = initialDelay;
	let threshold = initialThreshold;
	let rootMargin = initialRootMargin;

	node.setAttribute('data-reveal', '');

	if (!browser) {
		node.classList.add(className);
		return {};
	}

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add(className);
		return {};
	}

	node.style.setProperty('--rd', `${delay}ms`);

	let io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				node.classList.add(className);
				if (once) io.disconnect();
			}
		},
		{ threshold, rootMargin }
	);
	io.observe(node);

	return {
		update(next: RevealOptions) {
			if (next.delay !== undefined && next.delay !== delay) {
				delay = next.delay;
				node.style.setProperty('--rd', `${delay}ms`);
			}
			const needsRecreate =
				(next.threshold !== undefined && next.threshold !== threshold) ||
				(next.rootMargin !== undefined && next.rootMargin !== rootMargin);

			if (needsRecreate) {
				threshold = next.threshold ?? threshold;
				rootMargin = next.rootMargin ?? rootMargin;
				io.disconnect();
				io = new IntersectionObserver(
					(entries) => {
						for (const entry of entries) {
							if (!entry.isIntersecting) continue;
							node.classList.add(className);
							if (once) io.disconnect();
						}
					},
					{ threshold, rootMargin }
				);
				io.observe(node);
			}
		},
		destroy() {
			io.disconnect();
		}
	};
}

export function decode(node: HTMLElement, options: { delay?: number } = {}) {
	const { delay = 0 } = options;
	const text = node.textContent ?? '';

	if (!browser || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return {};

	const CHARS = '▓▒░#/|+=*0123456789';
	const timeout = setTimeout(() => {
		let frame = 0;
		const iv = setInterval(() => {
			frame++;
			let out = '';
			for (let i = 0; i < text.length; i++) {
				const ch = text[i];
				if (ch === ' ' || ch === '·') {
					out += ch;
					continue;
				}
				out += frame >= i * 2 + 6 ? ch : CHARS[(Math.random() * CHARS.length) | 0];
			}
			node.textContent = out;
			if (frame >= text.length * 2 + 8) {
				node.textContent = text;
				clearInterval(iv);
			}
		}, 34);
		(node as any).__decodeIv = iv;
	}, delay);

	return {
		destroy() {
			clearTimeout(timeout);
			clearInterval((node as any).__decodeIv);
		}
	};
}

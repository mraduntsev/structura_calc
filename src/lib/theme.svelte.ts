import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

class ThemeState {
	#value = $state<Theme>('dark');

	constructor() {
		if (browser) {
			const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
			this.#value = stored ?? 'dark';
		}
	}

	get current(): Theme {
		return this.#value;
	}
	get isDark(): boolean {
		return this.#value === 'dark';
	}

	toggle(): void {
		this.#value = this.#value === 'dark' ? 'light' : 'dark';
		if (browser) {
			localStorage.setItem(STORAGE_KEY, this.#value);
			document.documentElement.classList.toggle('dark', this.isDark);
		}
	}

	syncToDom(): void {
		if (browser) {
			document.documentElement.classList.toggle('dark', this.isDark);
		}
	}
}

export const theme = new ThemeState();

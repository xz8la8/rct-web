const snippetTypes = ['default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite'] as const;

const themeTypes = ['dark', 'light'] as const;

export type SnippetTypes = typeof snippetTypes[number];

export type ThemeTypes = typeof themeTypes[number];
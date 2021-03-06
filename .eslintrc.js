module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'prettier',
		'airbnb',
		'airbnb/hooks',
		'prettier/react',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.d.ts', '.ts', '.tsx'],
			},
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{ js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never' },
		],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
	},
};

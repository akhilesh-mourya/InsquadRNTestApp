module.exports = {
  printWidth: 100,
  tabWidth: 1,
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  eol: 'auto',
  overrides: [
      {
          files: '*.{js,jsx,tsx,ts,scss,json,html}',
          options: {
              tabWidth: 2,
          },
      },
  ],
};

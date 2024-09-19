module.exports = {
  'frontend/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  'frontend/**/*.{json,css,scss,md}': ['prettier --write'],
  'app/**/*.{json,css,scss,md}': ['prettier --write'],
  'app/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
};

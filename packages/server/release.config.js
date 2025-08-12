export default {
	branches: [
		'main',
		{
			name: 'next',
			prerelease: true,
		},
	],
  extends: 'semantic-release-monorepo',
}

module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	reporters: [
		'default',
		[
			'jest-junit',
			{
				outputDirectory: 'test-results/jest',
				outputName: 'results.xml',
			},
		],
	],
}

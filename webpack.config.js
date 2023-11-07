import Path from 'node:path';

export default {
	entry: './get-id.js',
	output: {
		path: Path.resolve('dist'),
		filename: 'get-id.js',
		library: {
			name: 'getId',
			type: 'umd',
			export: 'default'
		}
	}
};

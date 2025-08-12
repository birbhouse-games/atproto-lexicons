/* eslint-disable */

// Module imports
import {
  defineConfig,
  type Options,
} from 'tsup'





// constants
const BASE_CONFIG: Options = {
	clean: true,
	entry: {
		index: 'src/index.ts',
	},
	outDir: 'lib',
	sourcemap: true,
	splitting: true,
}





export default defineConfig([
	{
		...BASE_CONFIG,
		dts: true,
		format: ['esm'],
	},
	{
		...BASE_CONFIG,
	  dts: false,
		format: ['cjs'],
	},
])

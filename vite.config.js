import { resolve } from 'node:path';
import viteReact from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default {
	base: '/ra-editable-datagrid-repro',
	root: resolve(import.meta.dirname, 'src/client'),
	build: {
		emptyOutDir: true,
		outDir: resolve(import.meta.dirname, 'dist'),
		target: 'esnext', // no need to worry about browser compatibility for admin app users
	},
	plugins: [viteReact()],
	optimizeDeps: {
		// react-admin uses mui, which uses emotion under the hood, and these libraries in particular
		// are known to cause performance issues during local development if not pre-bundled
		include: ['@emotion/react', '@emotion/styled', '@mui/material/Tooltip'],
	}
};

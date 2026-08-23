import { defineConfig } from 'astro/config';
import { IMG_CDN_DOMAIN } from './src/constants/images';

// https://astro.build/config
export default defineConfig({
	image: {
		domains: [IMG_CDN_DOMAIN],
		remotePatterns: [{ protocol: 'https' }],
	},
});

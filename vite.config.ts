import react from '@vitejs/plugin-react';
import path from 'path';
import { type ConfigEnv, defineConfig, type UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

type ViteConfig = Omit<ConfigEnv, 'mode'> & {
    mode: 'development' | 'production';
};

export default defineConfig(({ mode }: ViteConfig): UserConfig => {
    return {
        root: path.resolve(__dirname, 'src'),
        base: './',
        publicDir: path.resolve(__dirname, 'public'),

        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },

        build: {
            outDir:
                mode === 'production'
                    ? path.resolve(__dirname, 'dist')
                    : path.resolve(__dirname, 'dist-dev'),
            emptyOutDir: true,
            sourcemap: true,
        },

        css: {
            modules: {
                generateScopedName: '--dt-[local]-[hash:base64:5]',
                localsConvention: 'camelCase',
            },
        },
        plugins: [
            svgr({
                svgrOptions: {
                    icon: true,
                    ref: true,
                },
            }),
            react(),
        ],
    };
});

import {ConfigEnv, defineConfig, UserConfig} from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

type ViteConfig = Omit<ConfigEnv, 'mode'> & {
    mode: 'development' | 'production',
};

export default defineConfig(({ mode }: ViteConfig): UserConfig => {

    return {
        root: path.resolve(__dirname, 'src'),
        base: './',

        resolve: {
          alias: {
              '@' : path.resolve(__dirname, './src'),
          },
        },
        build: {
            outDir: mode === 'production' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'dist-dev'),
            emptyOutDir: true,
            sourcemap: true,
        },

        css: {
            modules: {
                generateScopedName: '--mv   -[local]-[hash:base64:5]',
                localsConvention: "camelCase",
            },
        },
        plugins: [react()]
    }
});

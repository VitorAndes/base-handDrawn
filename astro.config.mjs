// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
    vite:{
        plugins: [tailwindcss()]
    },
    fonts:[{
        provider: fontProviders.google(),
        name: 'Epilogue',
        cssVariable: '--font-title',
    },{
        provider: fontProviders.google(),
        name: 'Karla',
        cssVariable: '--font-body',
    }]
});

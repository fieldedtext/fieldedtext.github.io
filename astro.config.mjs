// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: 'https://fieldedtext.github.io',
    trailingSlash: 'always',

    integrations: [
        mdx(),
        icon(),
    ],

    redirects: {
        '/Introduction.html': '/introduction',
        '/Capabilities.html': '/introduction/capabilities/',
        '/Faq.html': '/introduction/faq/',
        '/News.html': '/news/',
        '/Software.html': '/software/',
        '/examples.html': '/software/',
        '/Standard.html': '/standard/',
        '/Standard/PreviousReleases.html': '/standard/previous/',
        '/Standard/FTStd0.9.odt': '/standard/FTStd0.9.docx',
        '/Licence.html': '/',
        '/Contact.html': '/',
    },

    // Set the vite scss api property below if the following warning is displayed:
    // Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler' // or "modern"
                }
            }
        }
    }
});

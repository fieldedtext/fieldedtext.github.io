// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [
        mdx(),
        icon(),
    ],

    redirects: {
        '/Introduction.html': '/introduction',
        '/Capabilities.html': '/introduction/capabilities',
        '/Faq.html': '/introduction/faq',
        '/News.html': '/news',
        '/Software.html': '/software',
        '/examples.html': '/software',
        '/Standard.html': '/standard',
        '/Standard/PreviousReleases.html': '/standard/previous',
        '/Standard/FTStd0.9.odt': '/standard/FTStd0.9.docx',
        '/Licence.html': '/',
        '/Contact.html': '/',
    }
});
